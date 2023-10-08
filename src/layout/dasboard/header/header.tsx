import { AppShellHeader, Burger } from '@mantine/core';
import styles from './style.module.scss'

export default function LayoutHeader(){
  return(
    <AppShellHeader className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        Econosphere
      </div>
      <div className={styles.heeaderRight}>
        <div>search</div>
        <div>search</div>
        <Burger size="sm" />
      </div>
    </AppShellHeader>

  )
}