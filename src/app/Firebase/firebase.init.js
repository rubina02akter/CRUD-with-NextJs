// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp8GHJVf4H4rN4glxlu8nRYuO1BfO790U",
  authDomain: "advisor-coaching.firebaseapp.com",
  projectId: "advisor-coaching",
  storageBucket: "advisor-coaching.firebasestorage.app",
  messagingSenderId: "609032329412",
  appId: "1:609032329412:web:a6b24a4864ae5724af1191"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);