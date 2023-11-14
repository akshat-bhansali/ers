import React, { useState, useRef, useEffect } from 'react';

const Modal = ({ email }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedEmail, setSelectedEmail] = useState('');
  const [fromEmail, setFromEmail] = useState(email);
  const [reviewerEmails, setReviewerEmails] = useState([]);
  const modalRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      setIsModalVisible(false);
      // Add your logic for handling the form submission here
      console.log('Form submitted!');
      console.log('Selected Role:', selectedRole);
      console.log('Selected Email:', selectedEmail);
      console.log('User Email:', fromEmail);
      alert(`Credentials:\nUser Email: ${fromEmail}\nRole: ${selectedRole}\nReviewer Email: ${selectedEmail}`);
    } else {
      alert('Please fill out all fields in the form.');
    }

    closeOnOutsideClick(e);
  };

  const closeOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalVisible(false);
    }
  };

  const handleInputChange = (e) => {
    setFromEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleEmailChange = (e) => {
    setSelectedEmail(e.target.value);
  };

  useEffect(() => {
    if (isModalVisible) {
      // Set the initial value of fromEmail when the modal is opened
      setFromEmail(email);

      // Fetch reviewer emails from the API based on the selected role
      fetchReviewerEmails();
    }

    document.addEventListener('mousedown', closeOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
    };
  }, [isModalVisible, email, selectedRole]);

  useEffect(() => {
    // Check if all fields are filled
    setIsFormValid(fromEmail.trim() !== '' && selectedRole !== '' && selectedEmail !== '');
  }, [fromEmail, selectedRole, selectedEmail]);

  const fetchReviewerEmails = async () => {
    try {
      // Fetch reviewer emails from the API or use a static list if available
      // const response = await fetch('your_reviewer_emails_api_endpoint');
      // const data = await response.json();
      const allReviewerEmails = [
        { id: 1, value: 'reviewer1@example.com', label: 'Receiver 1', role: 'admin' },
        { id: 2, value: 'reviewer2@example.com', label: 'Receiver 2', role: 'user' },
        { id: 3, value: 'reviewer3@example.com', label: 'Receiver 3', role: 'admin' },
        // Add more data as needed
      ];

      // Filter reviewer emails based on the selected role
      const filteredReviewerEmails = allReviewerEmails.filter(
        (reviewer) => reviewer.role === selectedRole.toLowerCase()
      );

      setReviewerEmails(filteredReviewerEmails);
    } catch (error) {
      console.error('Error fetching reviewer emails:', error);
    }
  };

  return (
    <>
      {/* Modal toggle button */}
      <div className='flex items-center justify-center mb-5'>
        <button
          onClick={toggleModal}
          className="rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Assigned Reviews
        </button>
      </div>

      {/* Main modal */}
      {isModalVisible && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen bg-opacity-50 bg-black backdrop-blur-sm">
          <div
            ref={modalRef}
            className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-900 "
          >
            {/* Modal content */}
            <div>
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Assign Review
                </h3>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form onSubmit={handleSubmit} className="space-y-4" action="#">
                  <div>
                    <label
                      htmlFor="userEmail"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      User Email
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      id="userEmail"
                      value={fromEmail}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter user's email"
                      readOnly
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={selectedRole}
                      onChange={handleRoleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                      <option value="" disabled>
                        Select role
                      </option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="reviewerEmail"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Assign to
                    </label>
                    <select
                      id="reviewerEmail"
                      name="reviewerEmail"
                      value={selectedEmail}
                      onChange={handleEmailChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    >
                      <option value="" disabled>
                        Select Receiver
                      </option>
                      {reviewerEmails.map((reviewerEmail) => (
                        <option key={reviewerEmail.id} value={reviewerEmail.value}>
                          {reviewerEmail.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${isFormValid ? '' : 'cursor-not-allowed opacity-50'}`}
                    disabled={!isFormValid}
                  >
                    Assign Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
