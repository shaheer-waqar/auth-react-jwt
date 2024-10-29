import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const [userData,setUserData] = useState({});
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.clear();
        navigate("/login");
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("userdata"));
        setUserData(data)
    },[])
  return (
    <div className='flex justify-center items-center px-2 h-screen' >
        <div className='w-full max-w-[400px] border p-3'>
        <h1 className='text-2xl text-center font-bold'>Welcome {userData?.username}</h1>
        <h3 className='text-center font-semibold'>To my first backend Project</h3>
        <p className='text-center'>In this Project, I have authenticate the user</p>
        <button onClick={logout} className='w-full bg-blue-600 text-white mt-2 py-[3px]'>Log out</button>
        <p></p>
        </div>
    </div>
  )
}

export default Home