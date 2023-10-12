'use client'

import { Query } from '@utils/query';
import { getDetailArticle } from '@services/article';
import styles from './style.module.scss';
import React from 'react';
import LoadingSpinnerPrefetch from '@/components/elements/loadingSpinnerPrefetch';

interface ArticleDetailProps {
  id: string;
}

export default function ArticleDetailPrefetch({ id }:ArticleDetailProps) {
  const articleDetail = Query({ key:'getDetailArticlePrefetch',fn:()=>getDetailArticle(id) });
  return (
    <div className={styles.container}>
      {articleDetail.isFetching && <LoadingSpinnerPrefetch text={'matching data detail'}/>}
      <h1>{articleDetail.data.title}</h1>
      <p>
        {articleDetail.data.body}
      </p>
    </div>
  );
}