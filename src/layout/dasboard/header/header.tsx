'use client'
import { AppShell, Burger } from '@mantine/core';
import styles from './style.module.scss'

export default function LayoutHeader(){
  return(
    <AppShell.Header >
      <div className={styles.logoContainer}>
        <div>Logo</div>
      </div>
      <div>
        <div>search</div>
        <div>search</div>
      </div>
      <Burger hiddenFrom="sm" size="sm" />
    </AppShell.Header>

  )
}