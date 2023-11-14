import React from 'react';
import AssignedReviewsCard from './AssignedReviewsCard';

const AssignedReviews = () => {
  // Assuming you have an array of emails
  const emails = ["ayush@gmail.com", "john@example.com", "alice@example.com","ayush@gmail.com", "john@example.com", "alice@example.com",];

  return (
    <>
      <div className="pt-32 bg-blue-100">
        <h1 className="text-center text-4xl font-bold mb-10">Assigned Reviews</h1>
        <div className="flex flex-wrap flex-start min-h-screen">
          {emails.map((email, index) => (
            <AssignedReviewsCard recepientEmail={email} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AssignedReviews;
