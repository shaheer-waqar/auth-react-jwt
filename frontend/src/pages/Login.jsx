import axios from "axios";
import React from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


function Login() {
  const [formDta, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formDta, [name]: value });
  };

  const handleSumbit = async (event) => {
    const loadingToast = toast.loading("Logging in ")
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://authentication-with-jwt-brown.vercel.app/api/user/login",
        formDta
      );

      const {token} = response.data
      if(token){
        localStorage.setItem("token",token)
      }
      const decode = jwtDecode(token);
      localStorage.setItem("userdata",JSON.stringify(decode))
      toast.success("Successfully Login",{id:loadingToast});
      navigate("/")
    } catch (error) {
        console.log(error);
        toast.error("Faild to Login",{id:loadingToast});

    }
  };
  return (
    <div className="flex items-center justify-center h-screen px-2">
      <form className="w-full max-w-[350px]" onSubmit={handleSumbit}>
        <h2 className="text-2xl mb-2">Sign Up</h2>

        <label htmlFor="email">Email:</label>
        <br />
        <input
          className="border border-black outline-blue-600 py-[4px] px-2 w-full rounded-sm"
          type="email"
          id="email"
          name="email"
          required
          onChange={handleChange}
          placeholder="Doe"
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <input
          className="border border-black outline-blue-600 py-[4px] px-2 w-full rounded-sm "
          type="password"
          id="password"
          name="password"
          required
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <br />

        <button className="w-full py-[4px] rounded-sm bg-blue-600 text-white">
          Sign in
        </button><br />
        <div className="mt-1 text-center">Don't have an account? <Link className="text-blue-500 hover:underline" to="/signup">Sign in</Link>  </div>

      </form>
    </div>
  );
}

export default Login;
