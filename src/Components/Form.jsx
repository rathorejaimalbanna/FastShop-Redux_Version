import React, { useRef } from "react";
import styles from "../app.module.css";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions } from "../Redux/userReducer";

// FormData component handles sign-in and login forms
export default function FormData({ data }) {
  // Retrieve setUserData function from context
  // const { setUserData } = UseValue();
  const dispatch = useDispatch()
  // Use navigate hook for navigation
  const navigate = useNavigate();
  // Refs for form inputs
  const nameRef = useRef();
  const usernameRef = useRef();
  const passRef = useRef();

  // Function to handle sign-in form submission
  async function handleSignin(event) {
    // Add a new document in collection "userData"
    event.preventDefault();
    await setDoc(doc(db, "userData", usernameRef.current.value), {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      password: passRef.current.value,
    });
    const data = {
        name: nameRef.current.value,
        username: usernameRef.current.value,
      }
      dispatch(userActions.addUser(data))
    navigate('/');
  }

  // Function to handle login form submission
  function handleLogin(event) {
    event.preventDefault();
    async function fetchDdata() {
      const docRef = doc(db, "userData", usernameRef.current.value);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        // Update user data using dispatch and navigate to home page
        dispatch(userActions.addUser(docSnap.data()));
        navigate('/');
      } else {
        // Alert for invalid credentials
        alert('Invalid Credentials');
      }
    }
    // Fetch user data
    fetchDdata();
  }

  return (
    <>
      {/* Render form title */}
      <h3 style={{ textAlign: "center", fontWeight: "600" }}># {data}!</h3>
      {/* Render form */}
      <form action="" className={styles.form} onSubmit={data === "Sign Up" ? handleSignin : handleLogin}>
        {/* Render name input for sign-up form */}
        {data === "Sign Up" && <input
          type="text"
          placeholder="Name"
          className={styles.formInput}
          ref={nameRef}
          required
        />}
        {/* Render username input */}
        <input
          type="username"
          placeholder="Username"
          className={styles.formInput}
          ref={usernameRef}
          required
        />
        {/* Render password input */}
        <input
          type="password"
          placeholder="Password"
          className={styles.formInput}
          ref={passRef}
          required
        />
        {/* Render submit button */}
        <button type="submit" className={styles.submitButton}>
          {data}
        </button>
      </form>
    </>
  );
}
