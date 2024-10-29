import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AuthProtectedd from './pages/AuthProtectedd';
import PagesProtected from './pages/PagesProtected';
import Home from './pages/Home';
function App() {

  const getData = async ()=>{
    try {
      const response = await axios.get('https://authentication-with-jwt-brown.vercel.app')
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
    <Routes>
      <Route element={<PagesProtected/>}>
      <Route path='/' element={<Home/>}/>
      </Route>

      <Route element={<AuthProtectedd/>}>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
