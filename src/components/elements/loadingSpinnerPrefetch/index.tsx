import { Loader } from '@mantine/core';
import React from 'react';
import styles from './style.module.scss';

interface LoadingSpinnerProps {
  text: string; // Specify the type of the 'text' prop as a string
}

export default function LoadingSpinnerPrefetch({ text }: LoadingSpinnerProps) {
  return (
    <div className={styles.container}>
      <Loader size={'xs'} />
      <p>{text}</p>
    </div>
  );
}
