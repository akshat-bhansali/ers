import React, { useState, useRef, useEffect } from 'react';
import Modal from './AssignModal';
import EditRoleModal from './EditRoleModal';

const EmployeeCard = ({ name, email, role, status }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef(null);

  const deleteCard = () => {
    alert(`Deleting user: ${name}`);
    // Add your logic for deleting the user here
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the form submission here
    console.log('Form submitted!');
    closeOnOutsideClick(e);
  };

  const closeOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative flex flex-col text-gray-700 bg-blue-300 shadow-md w-96 rounded-xl bg-clip-border ml-10 mb-20 h-3/6">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
          alt="img-blur-shadow"
          layout="fill"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h5>
        <p className="font-semibold block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Email: {email} <br />
          Role: {role} <br />
          Status: {status}
        </p>
      </div>
      <div className="p-6 pt-0 space-x-4">
        <button
          className="rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          data-ripple-light="true"
          onClick={deleteCard}
        >
          Delete
        </button>
      </div>
      <EditRoleModal email={email} role={role} />
      <Modal email={email} />
    </div>
  );
};

export default EmployeeCard;
