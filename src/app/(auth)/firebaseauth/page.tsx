'use client';
import styles from '@styles/page.module.css';
import React from 'react';
import { useEffect } from 'react';

interface FirebaseauthProps {
  searchParams: URLSearchParams;
}

const Firebaseauth: React.FC<FirebaseauthProps> = ({ searchParams }) => {

  useEffect(() => {
    const searchParamsUrl = new URLSearchParams(searchParams);
    const deeplink = 'econoshpehere://localhost:3000/firebaseauth/?'
    const oobCode = searchParams.get('oobCode');
    const apiKey = searchParams.get('apiKey');
    if (oobCode && apiKey) {
      window.location.assign(`${deeplink}${searchParamsUrl.toString()}`);
    }
  }, [searchParams]);

  return (
    <div className={styles.main}>
      hang on will be redirect to app
    </div>
  );
}

export default Firebaseauth