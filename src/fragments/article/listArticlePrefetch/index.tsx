'use client'

import { getArticle } from '@services/article';
import { Query } from '@utils/query';
import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';
import { Button } from '@mantine/core';
import LoadingSpinnerPrefetch from '@/components/elements/loadingSpinnerPrefetch';

interface Article {
  id: number;
  title: string;
  body:string;
}

export default function ListArticlePrefetch(){  
  const articles = Query({ key:'getArticlePrefetch',fn:getArticle });
  return(
    <div className={styles.container}>
      {articles.isFetching && <LoadingSpinnerPrefetch text={'matching data'}/>}
      {articles.data.map((article:Article) => {
        return (
          <div className={styles.articleHead} key={article.id}>
            <div className={styles.title}>{article.title}</div>
            <div className={styles.body}>{article.body}</div>
            <Link href={`/comment/${article.id}`} className={styles.readMore}>
              <Button variant='outline' size='xs' >read more</Button>
            </Link>
          </div>
        );
      })
      }
    </div>
  )
}