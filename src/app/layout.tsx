import '../styles/globals.css';
import React from 'react';
import ContextProvider from '../context';
import '@mantine/core/styles.css';
import DashboardLayout from '@/layout/dasboard';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </ContextProvider>
      </body>
    </html>
  );
}
