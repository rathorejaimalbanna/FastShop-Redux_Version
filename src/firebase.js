// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqazkfBhwvgKrArE-Eea7_s3Gdso3zhRs",
  authDomain: "fastshop-34554.firebaseapp.com",
  projectId: "fastshop-34554",
  storageBucket: "fastshop-34554.appspot.com",
  messagingSenderId: "685679911321",
  appId: "1:685679911321:web:8ddad8895354877a24b308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);