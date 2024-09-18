import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const review = {
  rating: 2,
  content:
    "I really loved this product, but then I took it out of the box and realized I didn't like it at all.",
  author: "Emily Selman",
  avatarSrc:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

export default function GoodReview() {
  //Intialize state
  const [rating, setRating] = useState(review.rating);

  const handleStarClick = (index) => {
    setRating(index + 1); // Update state 
  };

  return (
    <div className="review">
      <div className="review-wrapper">
        <img className="review-avatar" src={review?.avatarSrc} alt="Review Author" />
        <div className="review-left">
          <h4 className="review-author">{review?.author}</h4>
          <ReviewRating rating={rating} onStarClick={handleStarClick} />
        </div>
      </div>
      <div className="review-content">
        {rating >= 4 ? review.content : "No review"}
      </div>
    </div>
  );
}

function ReviewRating({ rating, onStarClick }) {
  return (
    <div className="review-rating">
      {[0, 1, 2, 3, 4].map((index) => (
        <StarIcon
          key={index}
          className={`review-star ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
          aria-hidden="true"
          onClick={() => onStarClick(index)}
        />
      ))}
    </div>
  );
}
