import { MainPhotos } from "./Fotos/MainPhotos";
import { useState } from "react";
import { jsPDF } from "jspdf";
import { questions } from "./Data";
import { MyQuestion } from "./MyQuestion";
import Voice from "./Speach/Voice";
import RecogReact from "./Speach/RecogReact";

function App() {
  const [images, setImages] = useState([]);
  const handleAddNewImage = (imageUrl) => {
    setImages((prevImages) => [...prevImages, imageUrl]);
  };
  console.log(images);
  const handleDeleteImage = (name) => {
    console.log(name);
    setImages((prevImages) => prevImages.filter((image) => image !== name));
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    

    images.forEach((img, index) => {
      pdf.addImage(img, "JPEG", 10, 10 + index * 60, 50, 50);
    });

    pdf.save("fotos.pdf");
  };

  return (
    <>
      {questions.map((x) => {
        return (
          <MyQuestion
            key={x.id}
            id={x.id}
            Question={x.qst}
            handleAddNewImage={handleAddNewImage}
            handleDeleteImage={handleDeleteImage}
          />
        );
      })}

      <button onClick={generatePDF}>Descargar PDF</button>
      <Voice/>
      <RecogReact/>
    </>
  );
}

export default App;
