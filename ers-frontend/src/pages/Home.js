import React,{useEffect, useState} from 'react'
import Login from '../components/Login'
import Logout from '../components/Logout'

const Home = () => {
  const loggedInUser = localStorage.getItem("user");
  return (
   <>
    <div>
      {loggedInUser?loggedInUser:<Login/>}
    </div>
    <div>
      {loggedInUser?<Logout/>:loggedInUser}
    </div>
    </>
  )
}

export default Home
