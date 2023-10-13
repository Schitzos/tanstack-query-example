'use client'

import LoadingSpinner from '@/components/elements/loadingSpinner';
import { getArticle } from '@services/article';
import { Query } from '@utils/query';
import Link from 'next/link';
import React from 'react';
import styles from './style.module.scss';
import { Button } from '@mantine/core';
interface Article {
  id: number;
  title: string;
  body:string;
}

export default function ListArticle(){  
  const articles = Query({ key:'getArticle',fn:getArticle });
  if(articles.isFetching){
    return <LoadingSpinner text='Loading dulu bentar ...'/>
  }
  return(
    <div className={styles.container}>
      {articles?.data?.map((article:Article) => {
        return (
          <div className={styles.articleHead} key={article?.id}>
            <div className={styles.title}>{article?.title}</div>
            <div className={styles.body}>{article?.body}</div>
            <Link href={`/article/${article.id}`} className={styles.readMore}>
              <Button variant='outline' size='xs' >read more</Button>
            </Link>
          </div>
        );
      })
      }
    </div>
  )
}