import { getArticle } from '@services/article';
import styles from '@styles/article.module.css';
import React from 'react';
import RQHydrate from '@/components/elements/reactQueryHydrate';
import prefetchingQuery from '@utils/prefetchQuery';
import ListArticlePrefetch from '@/fragments/article/listArticlePrefetch';

export default async function Post() {
  const hydrateQueries = [
    { key:'getArticlePrefetch',fn:getArticle },
  ]
  const prefetchedQuery = await prefetchingQuery(hydrateQueries)
  return (
    <RQHydrate state={prefetchedQuery}>
      <div className={styles.main}>
        <ListArticlePrefetch/>
      </div>
    </RQHydrate>
  );
}
