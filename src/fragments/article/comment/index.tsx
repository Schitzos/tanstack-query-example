'use client'
import { Query } from '@utils/query';
import { getCommentArticle } from '@services/article';
import styles from './style.module.scss';
import React from 'react';
import LoadingSpinner from '@/components/elements/loadingSpinner';

interface Comment {
  id: string;
  name: string;
  body: string;
}

interface ArticleCommentProps {
  id: string;
}

export default function ArticleComment({ id }: ArticleCommentProps) {
  const comments = Query({ key: 'getCommentArticle', fn: () => getCommentArticle(id) });
  if(comments.isFetching){
    return <LoadingSpinner text='Loading comment article..'/>
  }
  return (
    <div className={styles.container}>
      Comment: 
      {comments?.data?.map((comment: Comment) => (
        <div key={comment?.id}>
          <h1>{comment?.name}</h1>
          <p>{comment?.body}</p>
        </div>
      ))}
    </div>
  );
}
