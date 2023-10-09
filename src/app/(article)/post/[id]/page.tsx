import { Suspense } from 'react';
import styles from '@styles/articleDetail.module.css';
import ArticleDetail from '@/fragments/article/detail';
import ArticleComment from '@/fragments/article/comment';
import React from 'react';
import { getCommentArticle, getDetailArticle } from '@services/article';
import RQHydrate from '@/components/elements/reactQueryHydrate';
import prefetchingQuery from '@utils/prefetchQuery';

interface Params {
  id: string;
}

export default async function PostId({ params }: { params: Params }) {
  const hydrateQueries = [
    { key: 'comment-article', fn: () => getCommentArticle(params.id) },
    { key: 'detail-article', fn: () => getDetailArticle(params.id) },
  ];
  const prefetchedQuery = await prefetchingQuery(hydrateQueries);

  // console.log(prefetchedQuery.queries[0])
  return (
    <RQHydrate state={prefetchedQuery}>
      <div className={styles.main}>
        <Suspense fallback={<p>Loading article...</p>}>
          <ArticleDetail id={params.id} />
        </Suspense>
        <Suspense fallback={<p>Loading comments...</p>}>
          <ArticleComment id={params.id} />
        </Suspense>
      </div>
    </RQHydrate>
  );
}
