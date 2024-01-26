// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "full-stack-mern-auth-project.firebaseapp.com",
  projectId: "full-stack-mern-auth-project",
  storageBucket: "full-stack-mern-auth-project.appspot.com",
  messagingSenderId: "845589034474",
  appId: "1:845589034474:web:528af61e7f568d2e522e93",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
