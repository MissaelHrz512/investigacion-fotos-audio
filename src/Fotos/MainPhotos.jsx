import { useState } from "react";

export const MainPhotos = ({ id, handleAddNewImage, handleDeleteImage }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const PhotoIcon = () => {
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
        <path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      </svg>
    );
  };

  const TrashIcon = () => {
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
        <path d="M4 7h16" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        <path d="M10 12l4 4m0 -4l-4 4" />
      </svg>
    );
  };

  const handleImageCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const urlImg = URL.createObjectURL(file)
      setSelectedFile(urlImg);
      handleAddNewImage(urlImg);
    }
  };
  const removeImage = () => {
    if (selectedFile) {
      console.log("..",selectedFile)
      handleDeleteImage(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div>
      <input
        type="file"
        id={`fileInput_${id}`}
        accept="image/*"
        capture="environment"
        onChange={(e) => handleImageCapture(e)}
        style={{ display: "none" }}
      />

      {/* Botón personalizado */}
      <button
        onClick={() => document.getElementById(`fileInput_${id}`).click()}
      >
        {selectedFile ? "Cargada" : <PhotoIcon />}
      </button>

      {selectedFile && (
        <button onClick={removeImage} style={{ marginLeft: "10px" }}>
          <TrashIcon />
        </button>
      )}
    </div>
  );
};
