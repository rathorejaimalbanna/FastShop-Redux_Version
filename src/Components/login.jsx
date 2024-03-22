import React from 'react';
import styles from '../app.module.css';
import FormData from './Form';

// LogIn component renders the login form
export default function LogIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.formDiv}>
        {/* Render login form */}
        <FormData data='Log In' />
      </div>
    </div>
  );
}
