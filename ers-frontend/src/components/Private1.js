import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const Private1 = () => {
    const auth = localStorage.getItem('user');
  return (
    auth?<Outlet/>:<Navigate to='/'/>
  )
}

export default Private1