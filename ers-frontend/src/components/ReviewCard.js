import React from 'react';

const ReviewCard = ({ reviewer, review }) => {
  return (
    <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md p-6 mb-10 ml-10 h-2/6 bg-blue-300">
      <h2 className="text-2xl font-semibold mb-4">Review Card</h2>
      <div className="mb-4">
        <label htmlFor="reviewer" className="block text-sm font-medium text-gray-700">
          Reviewer
        </label>
        <input
          type="text"
          id="reviewer"
          name="reviewer"
          value={reviewer}
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
          placeholder="Enter Reviewer's Name"
          required
          readOnly
        />
      </div>
      <div>
        <label htmlFor="review" className="block text-sm font-medium text-gray-700">
          Review
        </label>
        <textarea
          id="review"
          name="review"
          value={review}
          rows="4"
          className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
          placeholder="Enter Review"
          required
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewCard;
