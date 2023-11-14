import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AssignedReviewsCard = ({recepientEmail}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const notifyReview = () => toast("Review Submitted");

  useEffect(() => {
    // Set the email from the prop when the component mounts or when recipientEmail changes
    setEmail(recepientEmail);
  }, [recepientEmail]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    notifyReview();
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
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
};

export default AssignedReviewsCard;
