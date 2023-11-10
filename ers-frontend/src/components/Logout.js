import React from 'react'
import axios from "axios";

const Logout = () => {
    const logout = async()=>{
        try {
            await axios.get(`http://localhost:4000/api/v1/logout`);
            localStorage.removeItem("user")
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
