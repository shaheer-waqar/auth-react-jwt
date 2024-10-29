import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function AuthProtectedd() {
  return !localStorage.getItem("token") ? <Outlet/> : <Navigate to="/"/> 
}

export default AuthProtectedd