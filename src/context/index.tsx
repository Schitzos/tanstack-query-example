'use client'
import React from 'react';
import { ReactQueryContextProvider } from './reactQueryContext';
import MantineContextProvider from './mantineContext';

export default function ContextProvider({ children }: React.PropsWithChildren) {
  return (
    <MantineContextProvider>
      <ReactQueryContextProvider>
        {children}
      </ReactQueryContextProvider>
    </MantineContextProvider>
  );
}