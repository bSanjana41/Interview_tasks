import React, { useState } from "react";

// Unicode: ★ (full), ☆ (empty), ⯨ (custom half-star fallback)
const getStarIcon = (value, hover, rating) => {
  const current = hover || rating;
  if (value <= current - 0.5 && value > current - 1) {
    return "⯨"; // You can replace this with a custom half-star icon or image
  }
  return value <= current ? "★" : "☆";
};

const HalfStarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="outer-container" style={{ fontSize: "2rem", cursor: "pointer" }}>
      {[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((value) => (
        <span
          key={value}
          onClick={() => setRating(value)}
          onMouseEnter={() => setHover(value)}
          onMouseLeave={() => setHover(0)}
        >
          {getStarIcon(value, hover, rating)}
        </span>
      ))}
      <p style={{ fontSize: "1.2rem" }}>Your rating: {rating}</p>
    </div>
  );
};

export default HalfStarRating;
