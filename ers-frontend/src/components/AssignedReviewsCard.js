import React, { useState, useEffect } from 'react';

const AssignedReviewsCard = ({recepientEmail}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Set the email from the prop when the component mounts or when recipientEmail changes
    setEmail(recepientEmail);
  }, [recepientEmail]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Form submitted!');
    console.log('Recipient:', email);
    console.log('Review:', message);
    alert("Review Submitted");
    // You can send this data to your backend or perform any other actions
  };

  return (
    <div className="max-w-md rounded-md overflow-hidden shadow-md p-6 ml-10 mb-10 h-2/5 bg-blue-300">
      <h2 className="text-2xl font-semibold mb-4">Provide Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Recipient
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Recipient's email address"
            required
            readOnly // Make the input field read-only
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="Your Review"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AssignedReviewsCard;
