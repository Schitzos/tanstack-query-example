import { getArticle } from '@services/article';
import styles from '@styles/article.module.css';
import React from 'react';
import RQHydrate from '@components/reactQueryHydrate';
import ListArticle from '@/fragments/article/listArticle';
import { getUser } from '@services/user';
import prefetchingQuery from '@utils/prefetchQuery';

export default async function Post() {
  const hydrateQueries = [
    { key:'articles',fn:getArticle },
    { key:'users',fn:getUser },
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
