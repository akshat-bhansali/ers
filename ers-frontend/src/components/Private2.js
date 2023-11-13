import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

const Private2 = () => {
    const role = 'admin'
    let check = false;
    if(role === 'admin'){
        check = true;
    }

  return (
    check?<Outlet/>:<Navigate to='/reviews'/>
  )
}

export default Private2