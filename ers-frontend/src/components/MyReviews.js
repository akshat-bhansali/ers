import React from 'react';
import ReviewCard from './ReviewCard';
import Footer from './Footer';

const MyReviews = () => {
  const reviewsData = [
    { reviewer: 'John Doe', review: 'This is a great product. I highly recommend it!' },
    { reviewer: 'Alice Smith', review: 'Excellent service. Very satisfied with the experience.' },
    
    // Add more objects as needed
  ];

  return (
    <>
    <div className="h-screen pt-32 bg-blue-100">
      <h1 className="text-center text-4xl font-bold mb-10">My Reviews</h1>
      <div className="flex flex-wrap flex-start bg-blue-100">
        {reviewsData.map((review, index) => (
          <ReviewCard key={index} reviewer={review.reviewer} review={review.review} />
        ))}
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default MyReviews;
