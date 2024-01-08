import React, { useState, useEffect } from "react";
import PhotoGallery from "./components/PhotoGallery";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

  useEffect(() => {
    fetch("photos.json")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        setCurrentPhotoIndex(Math.floor(Math.random() * data.length));
      })
      .catch((error) => console.error("Błąd podczas ładowania zdjęć", error));
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  const handleRatingChange = (newRating) => {
    setPhotos((currentPhotos) =>
      currentPhotos.map((photo, index) =>
        index === currentPhotoIndex ? { ...photo, rating: newRating } : photo
      )
    );
  };

  if (currentPhotoIndex === null) {
    return <div>Ładowanie zdjęć...</div>;
  }

  return (
    <div className="photo-gallery-container">
      <PhotoGallery
        photo={photos[currentPhotoIndex]}
        onNext={nextPhoto}
        onPrev={prevPhoto}
        onRatingChange={handleRatingChange}
        canGoNext={currentPhotoIndex < photos.length - 1}
        canGoPrev={currentPhotoIndex > 0}
      />
    </div>
  );
}

export default App;
