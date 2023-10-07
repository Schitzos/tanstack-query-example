'use client'
import { AppShell, Divider, NavLink } from '@mantine/core';
import styles from './style.module.scss'
import iconHome from '@assets/icon/icon-home.svg';

export default function LayoutNavbar(){
  const menus = [
    { group:'General',
      parent:[
        { label:'Event' ,route:'#',icon : iconHome },
        { label:'Input Data' ,route:'#',icon : iconHome },
        { label:'Admin Management' ,route:'#',icon : iconHome },
      ]
    },
    { group:'Core Simulation',
      parent:[
        { label:'Dashboard' ,route:'#',icon : iconHome },
        { label:'Input Data' ,route:'#',icon : iconHome },
        { label:'Pasar Induk' ,route:'#',icon : iconHome },
        { label:'Bank' ,route:'#',icon : iconHome },
        { label:'Pasar Investasi' ,route:'#',icon : iconHome },
        { label:'Pasar Eksternal' ,route:'#',icon : iconHome },
      ]
    },
    { group:'Menu',
      parent:[
        { label:'Client' ,route:'/client',icon : iconHome },
        { label:'Server' ,route:'/server',icon : iconHome },
        { label:'React Query Client' ,route:'/react-query/client',icon : iconHome },
        { label:'React Query Server' ,route:'/react-query/server',icon : iconHome },
      ]
    },
  ]
  return (
    <AppShell.Navbar className={styles.navContainer }>
      {menus.map((menu,index)=>{
        return(
          <div key={menu.group} className={styles.navGroup}>
            <div className={styles.groupName}>{menu.group}</div>
            <div>
              {menu.parent.map(parent=>{
                return(
                  <NavLink
                    className={styles.navParent}
                    key={parent.label}
                    label={parent.label}
                    leftSection={<parent.icon/>}
                    href={parent.route}
                  />
                )
              })}
              {index !== menus.length - 1 && <Divider my="sm" />}
            </div>
          </div>
        )
      })}
    </AppShell.Navbar>
  )
}