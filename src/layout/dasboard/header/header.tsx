'use client'
import { AppShellHeader } from '@mantine/core';
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
        SoldevShare
      </div>
      <div className={styles.heeaderRight}>
        <div onClick={()=>handleLogoutForm()} className={styles.logout}>Logout</div>
      </div>
    </AppShellHeader>

  )
}