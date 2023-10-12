import styles from '@styles/articleDetail.module.css';
import ArticleDetail from '@/fragments/article/detail';
import ArticleComment from '@/fragments/article/comment';
import React from 'react';

interface Params {
  id: string;
}

export default async function PostId({ params }: { params: Params }) {
  return (
    <div className={styles.main}>
      <ArticleDetail id={params.id} />
      <ArticleComment id={params.id} />
    </div>
  );
}
