import React from 'react';
import styles from '../app.module.css';
import FormData from './Form';

// SignIn component renders the sign-up form
export default function SignIn() {
  return (
    <div className={styles.signIn}>
      <div className={styles.formDiv}>
        {/* Render sign-up form */}
        <FormData data='Sign Up' />
      </div>
    </div>
  );
}
