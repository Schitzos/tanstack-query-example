import styles from '@styles/articleDetail.module.css';
import React from 'react';
import { getCommentArticle, getDetailArticle } from '@services/article';
import RQHydrate from '@/components/elements/reactQueryHydrate';
import prefetchingQuery from '@utils/prefetchQuery';
import ArticleDetailPrefetch from '@/fragments/article/detailPrefetch';
import ArticleCommentPrefetch from '@/fragments/article/commentPrefetch';

interface Params {
  id: string;
}

export default async function PostId({ params }: { params: Params }) {
  const hydrateQueries = [
    { key: 'getDetailArticlePrefetch', fn: () => getDetailArticle(params.id) },
    { key: 'getCommentArticlePrefetch', fn: () => getCommentArticle(params.id) },
  ];
  const prefetchedQuery = await prefetchingQuery(hydrateQueries);
  return (
    <RQHydrate state={prefetchedQuery}>
      <div className={styles.main}>
        <ArticleDetailPrefetch id={params.id} />
        <ArticleCommentPrefetch id={params.id} />
      </div>
    </RQHydrate>
  );
}
