'use client'
import { AppShell, Burger } from '@mantine/core';
import styles from './style.module.scss'

export default function LayoutHeader(){
  return(
    <AppShell.Header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        Econosphere
      </div>
      <div className={styles.heeaderRight}>
        <div>search</div>
        <div>search</div>
        <Burger size="sm" />
      </div>
    </AppShell.Header>

  )
}