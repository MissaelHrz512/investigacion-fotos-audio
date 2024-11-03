import React, { useState, useEffect } from "react";

const Voice = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (
      !("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    ) {
      alert("Tu navegador no soporta el reconocimiento de voz.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setText(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Error en el reconocimiento de voz:", event.error);
      setIsListening(false);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [isListening]);

  const handleToggleListening = () => {
    setIsListening((prevState) => !prevState);
  };

  return (
    <div style={{ textAlign: "center", padding: "1rem" }}>
      <h2>Reconocimiento de Voz</h2>
      <button
        onClick={handleToggleListening}
        style={{
          fontSize: "1.5rem",
          padding: "1rem 2rem",
          backgroundColor: isListening ? "red" : "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        {isListening ? "Detener" : "Iniciar"}
      </button>
      <p style={{ fontSize: "1.2rem", color: "#333" }}>
        Texto reconocido: {text}
      </p>
    </div>
  );
};

export default Voice;
