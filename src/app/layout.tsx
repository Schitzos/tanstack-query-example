import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import React from 'react';
import {  ColorSchemeScript } from '@mantine/core';
import DashboardLayout from '../layout/dasboard';
import ContextProvider from '@/context';
import { Notifications } from '@mantine/notifications';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const usertoken = await cookieStore.get('usertoken');
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
          {usertoken ? (
            <DashboardLayout>{children}</DashboardLayout>
          ) : (
            <>{children}</>
          )}
          <Notifications />
        </ContextProvider>
      </body>
    </html>
  );
}
