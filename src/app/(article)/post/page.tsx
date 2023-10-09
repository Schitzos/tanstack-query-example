import { getArticle } from '@services/article';
import styles from '@styles/article.module.css';
import React from 'react';
import RQHydrate from '@/components/elements/reactQueryHydrate';
import ListArticle from '@/fragments/article/listArticle';
import prefetchingQuery from '@utils/prefetchQuery';

export default async function Post() {
  const hydrateQueries = [
    { key:'articles',fn:getArticle },
  ]
  const prefetchedQuery = await prefetchingQuery(hydrateQueries)
  return (
    <RQHydrate state={prefetchedQuery}>
      <div className={styles.main}>
        <ListArticle/>
      </div>
    </RQHydrate>
  );
}
