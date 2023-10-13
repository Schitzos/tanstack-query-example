'use client'

import { Query } from '@utils/query';
import { getDetailArticle } from '@services/article';
import styles from './style.module.scss';
import React from 'react';
import LoadingSpinner from '@/components/elements/loadingSpinner';

interface ArticleDetailProps {
  id: string;
}

export default function ArticleDetail({ id }:ArticleDetailProps) {
  const articleDetail = Query({ key:'getDetailArticle',fn:()=>getDetailArticle(id) });
  if(articleDetail.isFetching){
    return <LoadingSpinner text='Loading detail article..'/>
  }
  console.log(articleDetail)
  return (
    <div className={styles.container}>
      <h1>{articleDetail?.data?.title}</h1>
      <p>
        {articleDetail?.data?.body}
      </p>
    </div>
  );
}