import { Loader } from '@mantine/core';
import React from 'react';
import styles from './style.module.scss';

interface LoadingSpinnerProps {
  text: string; // Specify the type of the 'text' prop as a string
}

export default function LoadingSpinner({ text }: LoadingSpinnerProps) {
  return (
    <div className={styles.container}>
      <Loader />
      <h1>{text}</h1>
    </div>
  );
}
