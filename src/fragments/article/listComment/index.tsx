'use client'

import { getComment } from '@services/article';
import { Query } from '@utils/query';
import React from 'react';
import styles from './style.module.scss';

interface Article {
  id: number;
  email: string;
  name: string;
  body: string;
}

export default function ListComment(){  
  const comments = Query({ key:'getComment',fn:getComment });
  return(
    <div className={styles.container}>
      {comments.data.isFetching && <div>Loading data</div>}
      {comments.data.map((article:Article) => {
        return (
          <div key={article.id} className={styles.commentContainer}>
            <div className={styles.commentHead}>
              <div className={styles.name}>{article.name}</div>
              <div className={styles.email}>{article.email}</div>
            </div>
            <div>{article.body}</div>
          </div>
        );
      })
      }
    </div>
  )
}