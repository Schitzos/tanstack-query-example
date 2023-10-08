import { AppShellMain } from '@mantine/core';

export default function LayoutContent({ children }: React.PropsWithChildren){
  return (
    <AppShellMain>{children}</AppShellMain>
  )
}