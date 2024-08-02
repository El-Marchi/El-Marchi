import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/signUp", {
        firstName,
        email,
        password,
        role: "admin"
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
      console.log(response.data, "signup success");
    } catch (error) {
      console.log(error, "signup error");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-screen">
        <div className="hidden md:block w-1/2 bg-sky-100">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1622556498246-755f44ca76f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
            alt="Shopping cart with smartphone" 
          />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              Create an account
            </h2>
            <p className="text-gray-600 mb-8">
              Enter your details below
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-3 py-2 border-b border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-500"
                  placeholder="Name"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
              </div>
              <div>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border-b border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-500"
                  placeholder="Email or Phone Number"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border-b border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:border-gray-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Create Account
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <button
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <img className="h-5 w-5 mr-2" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
                Sign up with Google
              </button>
            </div>
            
            <p className="mt-8 text-center text-sm text-gray-600">
              Already have account? <a href="#" className="font-medium text-gray-900 hover:underline">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp