// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtzW5QbJQf_oBjyO6zMdd3HX-m-7LdDk4",
  authDomain: "reactfirebase-83a25.firebaseapp.com",
  projectId: "reactfirebase-83a25",
  storageBucket: "reactfirebase-83a25.appspot.com",
  messagingSenderId: "858730164647",
  appId: "1:858730164647:web:4b8420307406c75b114682",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default firebaseConfig;
