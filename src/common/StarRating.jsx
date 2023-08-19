"use client";

import { StarRatingIcon } from "@/assets/svgs";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex items-center">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <StarRatingIcon
              active={index <= (hover || rating) ? true : false}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
