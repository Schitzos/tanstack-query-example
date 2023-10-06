'use client'

import { getArticle } from '@services/article';
import { Query } from '@utils/query';
import Link from 'next/link';
import React from 'react';

interface Article {
  id: number;
  title: string;
}

export default function ListArticle(){  
  const articles = Query({ key:'articles',fn:getArticle });
  return(
    <div>
      {articles.data.isFetching && <div>Loading data</div>}
      {articles.data.map((article:Article) => {
        return (
          <div key={article.id}>
            <li>{article.title}</li>
            <Link href={`/post/${article.id}`}><button>read asd</button></Link>
          </div>
        );
      })
      }
    </div>
  )
}