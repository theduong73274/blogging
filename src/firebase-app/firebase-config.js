// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJSVPuEg8aN-44k-wzOHBqV7Z9nVdXuDE",
  authDomain: "monkey-blogging-84dc5.firebaseapp.com",
  projectId: "monkey-blogging-84dc5",
  storageBucket: "monkey-blogging-84dc5.appspot.com",
  messagingSenderId: "671819028300",
  appId: "1:671819028300:web:bdfef211c8ca991e54a1e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
export const db = getFirestore(app);
export const auth = getAuth(app);
