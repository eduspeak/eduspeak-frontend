import React, { useState } from "react";

const StarRating = ({ initialValue = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialValue);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              className="sr-only" // Tambahkan kelas ini
              onClick={() => {
                setRating(ratingValue);
                onRatingChange && onRatingChange(ratingValue);
              }}
            />
            <svg
              className={`w-6 h-6 cursor-pointer ${
                ratingValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.277l1.947 6.055h6.306l-5.077 3.779l1.916 6.118l-5.092-3.868l-5.092 3.868l1.916-6.118l-5.077-3.779h6.306z" />
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
