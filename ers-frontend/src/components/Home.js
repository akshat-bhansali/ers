import React,{useEffect, useState} from 'react'
import Login from './Login'
import Logout from './Logout'

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
