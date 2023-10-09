import { AppShellNavbar, Divider, NavLink } from '@mantine/core';
import styles from './style.module.scss'
import iconHome from '@assets/icon/icon-home.svg';
import { headers } from 'next/headers';

export default function LayoutNavbar(){

  const headersList = headers();
  const pathname = headersList.get('x-pathname');
  
  const menus = [
    { group:'General',
      parent:[
        { label:'Event' ,route:'/',icon : iconHome },
        { label:'Input Data' ,route:'/profile',icon : iconHome },
        { label:'Admin Management' ,route:'/about',icon : iconHome },
      ]
    },
    { group:'Core Simulation',
      parent:[
        { label:'Dashboard' ,route:'/post',icon : iconHome },
        { label:'Input Data' ,route:'#',icon : iconHome },
        { label:'Pasar Induk' ,route:'#',icon : iconHome },
        { label:'Bank' ,route:'#',icon : iconHome },
        { label:'Pasar Investasi' ,route:'#',icon : iconHome },
        { label:'Pasar Eksternal' ,route:'#',icon : iconHome },
      ]
    },
  ]
  return (
    <AppShellNavbar className={styles.navContainer }>
      {menus.map((menu,index)=>{
        return(
          <div key={menu.group} className={styles.navGroup}>
            <div className={styles.groupName}>{menu.group}</div>
            <div>
              {menu.parent.map(parent=>{
                return(
                  <NavLink
                    className={parent.route===pathname?[styles.navParent,styles.active].join(' '):styles.navParent}
                    key={parent.label}
                    label={parent.label}
                    leftSection={<parent.icon/>}
                    href={parent.route}
                    active={parent.route===pathname}
                  />
                )
              })}
              {index !== menus.length - 1 && <Divider my="sm" />}
            </div>
          </div>
        )
      })}
    </AppShellNavbar>
  )
}