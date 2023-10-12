import styles from '@styles/article.module.css';
import React from 'react';
import ListArticle from '@/fragments/article/listArticle';

export default async function Post() {
  return (
    <div className={styles.main}>
      <ListArticle/>
    </div>
  );
}
