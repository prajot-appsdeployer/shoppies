// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuYotTnQ5lmqTlGKfLFNJHgbhDI1UPbAY",
  authDomain: "shoppies-8c9da.firebaseapp.com",
  projectId: "shoppies-8c9da",
  storageBucket: "shoppies-8c9da.appspot.com",
  messagingSenderId: "499726995254",
  appId: "1:499726995254:web:4e2d898b3c65c9bf916d97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
