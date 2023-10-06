'use client'
import { Query } from '@utils/query';
import { getCommentArticle } from '@services/article';
import styles from '@styles/articleDetail.module.css';
import React from 'react';

interface Comment {
  id: string;
  name: string;
  body: string;
}

interface ArticleCommentProps {
  id: string;
}

export default function ArticleComment({ id }: ArticleCommentProps) {
  const comments = Query({ key: 'comment-article', fn: () => getCommentArticle(id) });
  
  return (
    <div className={styles.comment}>
      {comments.data.map((comment: Comment) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
