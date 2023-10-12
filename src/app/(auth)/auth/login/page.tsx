import React from 'react';
import styles from './style.module.scss';
import LoginForm from '@/components/forms/loginForm';

export default function Login() {
  return (
    <div className={styles.container}>
      <h1>Sign in</h1>
      <LoginForm/>
    </div>
  );
}
