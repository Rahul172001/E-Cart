// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1DditmzOBpTxXwA12aHPRIlHpS-KV1e0",
  authDomain: "e-cart-by-rahul.firebaseapp.com",
  projectId: "e-cart-by-rahul",
  storageBucket: "e-cart-by-rahul.firebasestorage.app",
  messagingSenderId: "694587335031",
  appId: "1:694587335031:web:6b634f48cf704b52480172",
  measurementId: "G-8VFM2W4LDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()