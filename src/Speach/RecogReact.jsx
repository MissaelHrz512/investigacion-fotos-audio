import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const RecogReact = () => {
  const [fullTranscript, setFullTranscript] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Tu navegador no soporta el reconocimiento de voz.</p>;
  }

  const handleStartListening = () => {
    setFullTranscript((prevTranscript) => prevTranscript + " " + transcript);
    resetTranscript();
    SpeechRecognition.startListening();
  };

  const handleStopListening = () => {
    setFullTranscript((prevTranscript) => prevTranscript + " " + transcript);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    resetTranscript();
    setFullTranscript("");
  };

  const RecordIconOn = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
        <path d="M5 10a7 7 0 0 0 14 0" />
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
      </svg>
    );
  };

  const RecordIconOff = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3l18 18" />
        <path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1" />
        <path d="M5 10a7 7 0 0 0 10.846 5.85m2 -2a6.967 6.967 0 0 0 1.152 -3.85" />
        <path d="M8 21l8 0" />
        <path d="M12 17l0 4" />
      </svg>
    );
  };

  return (
    <div>
      <h1>Reconocimiento de Voz</h1>
      <p>Estado: {listening ? "Escuchando..." : "Detenido"}</p>
      <button onClick={handleStartListening}>
        {listening ? <RecordIconOff /> : <RecordIconOn />}
      </button>
      <button onClick={handleReset}>Limpiar</button>
      <p>Transcripción: {fullTranscript + " " + transcript}</p>
    </div>
  );
};

export default RecogReact;
