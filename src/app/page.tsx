import styles from '@styles/page.module.css';
import Link from 'next/link';
import React from 'react';

export default function Home({}) {
  return (
    <main className={styles.main}>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
      <Link href="/post">post</Link>
      <Link href="/add-post">add post</Link>
    </main>
  );
}
