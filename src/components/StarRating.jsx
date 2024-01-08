import React from "react";

function StarRating({ rating, onRatingChange }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 1;
    return (
      <span
        key={number}
        className={`star ${number <= rating ? "filled" : ""}`}
        onClick={() => onRatingChange(number)}
      >
        ★
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
