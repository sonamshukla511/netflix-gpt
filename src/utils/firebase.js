// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp3IZ1cPp6G3ALAjSIYDJHCflaA-pcYMc",
  authDomain: "netflixgpt-a1efd.firebaseapp.com",
  projectId: "netflixgpt-a1efd",
  storageBucket: "netflixgpt-a1efd.appspot.com",
  messagingSenderId: "951132472626",
  appId: "1:951132472626:web:f873d86a56e19de466c32b",
  measurementId: "G-VFXE2DQBPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();