import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import LoginForm from '@/components/forms/loginForm';

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <Image
          src="/assets/images/login-illustration.png"
          width={458}
          height={578}
          alt="Picture of the author"
          priority={true}
        />
      </div>
      <div className={styles.formContainer}>
        <Image
          src="/assets/icons/icon-web-logo.png"
          width={74}
          height={74}
          alt="Picture of the author"
        />
        <h1>Sign in to Dashboard Econosphere</h1>
        <LoginForm/>
      </div>
    </div>
  );
}
