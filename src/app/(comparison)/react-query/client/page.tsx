'use client'
import styles from '@styles/article.module.css';
import React from 'react';
import ListArticle from '@/fragments/article/listArticle';

export default function ReactQueryClient() {
  return (
    <div className={styles.main}>
      <ListArticle/>
    </div>
  );
}
