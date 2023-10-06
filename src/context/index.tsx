'use client'
import React from 'react';
import { ReactQueryContextProvider } from './ReactQueryContext';

export default function ContextProvider({ children }: React.PropsWithChildren) {
  return (
    <ReactQueryContextProvider>
      {children}
    </ReactQueryContextProvider>
  );
}