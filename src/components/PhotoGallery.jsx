import React, { useState } from "react";
import StarRating from "./StarRating";

function PhotoGallery({
  photo,
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
  onRatingChange,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <img src={photo.url} alt={`Zdjęcie od ${photo.author}`} />
      <StarRating rating={photo.rating} onRatingChange={onRatingChange} />
      <p>Średnia ocena: {photo.rating}</p>
      <button onClick={toggleDetails} className="details-link">
        Szczegóły
      </button>
      {canGoPrev && (
        <button onClick={onPrev} className="nav-button">
          {"<"}
        </button>
      )}
      {canGoNext && (
        <button onClick={onNext} className="nav-button">
          {">"}
        </button>
      )}

      {showDetails && (
        <div className="photo-popup">
          <p>Autor: {photo.author}</p>
          <p>Data dodania: {photo.dateAdded}</p>
          <p>Szczegóły: {photo.details}</p>
        </div>
      )}
    </div>
  );
}

export default PhotoGallery;
