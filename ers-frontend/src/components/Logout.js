import React from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const Navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.get(`http://localhost:4000/api/v1/logout`);
      localStorage.removeItem("user")
      Navigate('/');

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button onClick={logout}>
      logout
    </button>
  )
}

export default Logout
