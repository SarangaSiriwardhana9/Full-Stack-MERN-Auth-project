// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePresent, setImagePresent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePresent(Math.round(progress));
      },
      // eslint-disable-next-line no-unused-vars
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-lg w-full max-w-md'>
        <h1 className='text-3xl font-extrabold text-center mb-6 text-blue-600'>
          Your Profile
        </h1>
        <form className='mb-8'>
          <div className='flex justify-center items-center mb-6'>
            {/* Firebase Storage rules
              allow read;
              allow write: if
              request.resource.size<2*1024*1024 &&
              request.resource.contentType.matches('image/.*')
            */}
            <input
              type='file'
              ref={fileRef}
              accept='image/*'
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt='profile'
              className='rounded-full w-24 h-24 cursor-pointer object-cover'
              onClick={() => fileRef.current.click()}
            />
          </div>
          <div className='mb-4'>
            <p className='text-sm text-center self-center'>
              {imageError ? (
                <span className='text-red-700'>
                  Error uploading image (file size must be less than 2 MB)
                </span>
              ) : imagePresent > 0 && imagePresent < 100 ? (
                <span className='text-green-700'>{`Uploading: ${imagePresent} %`}</span>
              ) : imagePresent === 100 ? (
                <span className='text-green-700'>
                  Image uploaded successfully
                </span>
              ) : (
                ""
              )}
            </p>
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
