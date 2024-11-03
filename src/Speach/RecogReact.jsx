import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const RecogReact = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Tu navegador no soporta el reconocimiento de voz.</p>;
  }

  return (
    <div>
      <h1>Reconocimiento de Voz</h1>
      <p>Estado: {listening ? "Escuchando..." : "Detenido"}</p>
      <button onClick={SpeechRecognition.startListening}>Iniciar</button>
      <button onClick={SpeechRecognition.stopListening}>Detener</button>
      <button onClick={resetTranscript}>Limpiar</button>
      <p>Transcripción: {transcript}</p>
    </div>
  );
};

export default RecogReact;