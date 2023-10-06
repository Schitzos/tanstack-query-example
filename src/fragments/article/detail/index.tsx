'use client'

import { Query } from '@utils/query';
import { getDetailArticle } from '@services/article';
import styles from '@styles/articleDetail.module.css';
import React from 'react';

interface ArticleDetailProps {
  id: string;
}

export default function ArticleDetail({ id }:ArticleDetailProps) {
  // const articleDetail = await getDetailArticle(id);
  const articleDetail = Query({ key:'detail-article',fn:()=>getDetailArticle(id) });

  return (
    <div className={styles.article}>
      <h2>{articleDetail.data.title}</h2>
      <p>
        {articleDetail.data.body}
      </p>
    </div>
  );
}