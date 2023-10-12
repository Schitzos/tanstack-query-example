'use client'
import { Query } from '@utils/query';
import { getCommentArticle } from '@services/article';
import styles from './style.module.scss';
import React from 'react';
import LoadingSpinnerPrefetch from '@/components/elements/loadingSpinnerPrefetch';

interface Comment {
  id: string;
  name: string;
  body: string;
}

interface ArticleCommentProps {
  id: string;
}

export default function ArticleCommentPrefetch({ id }: ArticleCommentProps) {
  const comments = Query({ key: 'getCommentArticlePrefetch', fn: () => getCommentArticle(id) });
  return (
    <div className={styles.container}>
      {comments.isFetching && <LoadingSpinnerPrefetch text={'matching data detail'}/>}
      Comment: 
      {comments.data.map((comment: Comment) => (
        <div key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
