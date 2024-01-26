// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-md'>
        <h1 className='text-3xl font-extrabold text-center mb-6 text-blue-600'>
          Your Profile
        </h1>
        <form className='mb-8'>
          <div className='flex justify-center items-center mb-6'>
            <img
              src={currentUser.profilePicture}
              alt='profile'
              className='rounded-full w-24 h-24 object-cover'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              id='username'
              placeholder='Username'
              defaultValue={currentUser.username}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <input
              type='email'
              id='email'
              placeholder='Email'
              defaultValue={currentUser.email}
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          <div className='mb-4'>
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
            />
          </div>
          {/* button for update with hover animation */}
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 transition duration-300'
          >
            Update
          </button>
        </form>
        <div className='flex justify-between'>
          {/* delete account with hover animation */}
          <span className='text-red-500 cursor-pointer hover:underline'>
            Delete Account
          </span>
          {/* logout with hover animation */}
          <span className='text-blue-500 cursor-pointer hover:underline'>
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}
