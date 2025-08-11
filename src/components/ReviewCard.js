// src/components/ReviewCard.js
import React from 'react';
import './ReviewCard.css';

function ReviewCard({ review }) {
  const stars = '⭐'.repeat(review.rating); // Simple star representation

  return (
    <div className="review-card">
      <p className="review-text">"{review.text}"</p>
      <div className="review-author">- {review.author}</div>
      <div className="review-rating">{stars}</div>
    </div>
  );
}

export default ReviewCard;