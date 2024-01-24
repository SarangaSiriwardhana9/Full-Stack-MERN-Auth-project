/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refreshing the page when submitting the form
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white rounded-2xl -mt-28 p-8  shadow-xl w-full max-w-md'>
        <h2 className='text-3xl font-extrabold text-center mb-6 text-blue-600'>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-600 text-sm mb-2'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your username'
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-600 text-sm mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='password'
              className='block text-gray-600 text-sm mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700'
          >
            Sign Up
          </button>
        </form>
        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{" "}
          <Link to='/signin' className='text-blue-500 hover:underline'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
