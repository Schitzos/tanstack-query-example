'use client'
import { AppShellHeader, Burger } from '@mantine/core';
import styles from './style.module.scss'
import { Mutation } from '@/utils/query';
import { authLogout } from '@/services/auth';
import { useRouter } from 'next/navigation';

export default function LayoutHeader(){
  const router = useRouter()
  const handleLogoutMutation = Mutation(authLogout,()=>handleRedirect());
  
  const handleLogoutForm = () => {
    handleLogoutMutation.mutate(null)
  }

  const handleRedirect = ()=>{
    router.push('/auth/login')
    router.refresh();
  }

  return(
    <AppShellHeader className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        Econosphere
      </div>
      <div className={styles.heeaderRight}>
        <div>search</div>
        <div onClick={()=>handleLogoutForm()}>Logout</div>
        <Burger size="sm" />
      </div>
    </AppShellHeader>

  )
}