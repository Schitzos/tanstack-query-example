'use client'
import { AppShell } from '@mantine/core';

export default function LayoutContent({ children }: React.PropsWithChildren){
  return (
    <AppShell.Main>{children }</AppShell.Main>
  )
}