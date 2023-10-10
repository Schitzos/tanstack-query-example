import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import {  ColorSchemeScript } from '@mantine/core';
// import DashboardLayout from '../layout/dasboard';
import ContextProvider from '@/context';
import { Notifications } from '@mantine/notifications';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ContextProvider>
          {/* <DashboardLayout> */}
          {children}
          {/* </DashboardLayout> */}
          <Notifications />
        </ContextProvider>
      </body>
    </html>
  );
}
