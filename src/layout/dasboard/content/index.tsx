import { Anchor, AppShellMain, Breadcrumbs } from '@mantine/core';
import styles from './style.module.scss'

export default function LayoutContent({ children }: React.PropsWithChildren){
  const items = [
    { title: 'Mantine', href: '#' },
    { title: 'Mantine hooks', href: '#' },
    { title: 'use-id', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <AppShellMain className={styles.contentContainer}>
      <div className={styles.breadcrumbsContainer}>
        <h1 className={styles.pageTitle}>Page Title</h1>
        <Breadcrumbs className={styles.breadcrumbsItem}>{items}</Breadcrumbs>
      </div>
      <div className={styles.mainContent}>
        {children}
      </div>
    </AppShellMain>
  )
}