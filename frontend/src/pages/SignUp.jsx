import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [formDta, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formDta, [name]: value });
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    const loadingToast = toast.loading("Creating a account")
    try {
      const response = await axios.post(
        "https://authentication-with-jwt-brown.vercel.app/api/user/register",
        formDta
      );
      console.log(response.data);
      toast.success("Account created successfully",{id:loadingToast})
      navigate("/login")
    } catch (error) {
      toast.error("failed to create ",{id:loadingToast})

      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen px-2">
      <form className="w-full max-w-[350px]" onSubmit={handleSumbit}>
        <h2 className="text-2xl mb-2"> Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          className="border border-black outline-blue-600 py-[4px] px-2 w-full rounded-sm"
          type="text"
          id="username"
          name="username"
          required
          onChange={handleChange}
          placeholder="John"
        />
        <br />
        <br />

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
          Sign up
        </button><br />

        <div className="mt-1 text-center">Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Sign in</Link>  </div>
      </form>
    </div>
  );
}

export default SignUp;
