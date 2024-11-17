import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js"; // Updated version

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
const auth = getAuth(app);

const submit = document.getElementById('submitLogin');
submit.addEventListener("click", function(event){
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("pword").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location.href="home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
});