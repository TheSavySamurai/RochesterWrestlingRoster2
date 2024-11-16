// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm7P0lDEKPnEJhBk4YsCGg_zy6uYnWhyA",
  authDomain: "wrestlingroster-a303b.firebaseapp.com",
  projectId: "wrestlingroster-a303b",
  storageBucket: "wrestlingroster-a303b.firebasestorage.app",
  messagingSenderId: "827487583334",
  appId: "1:827487583334:web:d69cccd09a0f4a783d01a7",
  measurementId: "G-DDFWEJQM4E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
