import React, { useState, useEffect } from 'react';

const Voice = () => {
  // Estados para almacenar el texto reconocido y el estado del reconocimiento
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Verifica si el navegador soporta el Web Speech API
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      alert('Tu navegador no soporta el reconocimiento de voz.');
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = true; // Continúa escuchando
    recognition.interimResults = true; // Muestra resultados parciales

    // Manejador de eventos cuando hay resultados de voz
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setText(transcript); // Actualiza el texto con la transcripción
    };

    // Iniciar/detener el reconocimiento
    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    recognition.onend = () => {
      if (isListening) recognition.start();
    };

    return () => recognition.stop(); // Detiene el reconocimiento al desmontar el componente
  }, [isListening]);

  // Función para manejar el botón de iniciar/detener
  const toggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Reconocimiento de Voz</h2>
      <button onClick={toggleListening}>
        {isListening ? 'Detener' : 'Iniciar'} Reconocimiento de Voz
      </button>
      <p>Texto reconocido: {text}</p>
    </div>
  );
};

export default Voice;