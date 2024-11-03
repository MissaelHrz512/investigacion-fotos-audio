import { MainPhotos } from "./Fotos/MainPhotos";

export const MyQuestion = ({
  id,
  Question,
  handleAddNewImage,
  handleDeleteImage,
}) => {
  return (
    <>
      <p>{Question}</p>
      <textarea />
      <MainPhotos
        id={id}
        handleAddNewImage={handleAddNewImage}
        handleDeleteImage={handleDeleteImage}
      />
    </>
  );
};
