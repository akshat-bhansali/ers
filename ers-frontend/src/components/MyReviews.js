import React from 'react';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
  const reviewsData = [
    { reviewer: 'John Doe', review: 'This is a great product. I highly recommend it!' },
    { reviewer: 'Alice Smith', review: 'Excellent service. Very satisfied with the experience.' },
  ];

  return (
    <>
    <div className="pt-32 bg-blue-100">
      <h1 className="text-center text-4xl font-bold mb-10">My Reviews</h1>
      <div className="flex flex-wrap flex-start bg-blue-100 min-h-screen">
        {reviewsData.map((review, index) => (
          <ReviewCard key={index} reviewer={review.reviewer} review={review.review} />
        ))}
      </div>
    </div>
    </>
  );
};

export default MyReviews;
