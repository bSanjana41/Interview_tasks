import React, { useState } from "react";
const StarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (

        <div className="Outer container">
            {[1, 2, 3, 4, 5].map((star) => {
                return (
                    <span key={star}
                        onClick={() =>
                            setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                    >
                        {star <= (hover || rating) ? "★" : "☆"}
                    </span>
                )
            })}
                        <p>Your rating: {rating}</p>

        </div>
    )
}

export default StarRating