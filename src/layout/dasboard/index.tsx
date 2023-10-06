import { AppShell } from '@mantine/core';
import LayoutHeader from './header/header';
import LayoutNavbar from './navbar';
import LayoutContent from './main';

export default function DashboardLayout({ children }: React.PropsWithChildren){
  return(
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md"
    >
      <LayoutHeader/>
      <LayoutNavbar/>
      <LayoutContent>{children}</LayoutContent>
    </AppShell>
  )
}