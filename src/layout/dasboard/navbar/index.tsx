'use client'
import { AppShell, Divider, NavLink } from '@mantine/core';
import styles from './style.module.scss'
import iconHome from '@assets/icon/icon-home.svg';

export default function LayoutNavbar(){
  const menus = [
    { group:'General',
      parent:[
        { label:'Event' ,route:'somewhere',icon : iconHome },
        { label:'Input Data' ,route:'somewhere',icon : iconHome },
        { label:'Admin Management' ,route:'somewhere',icon : iconHome },
      ]
    },
    { group:'Core Simulation',
      parent:[
        { label:'Dashboard' ,route:'somewhere',icon : iconHome },
        { label:'Input Data' ,route:'somewhere',icon : iconHome },
        { label:'Pasar Induk' ,route:'somewhere',icon : iconHome },
        { label:'Bank' ,route:'somewhere',icon : iconHome },
        { label:'Pasar Investasi' ,route:'somewhere',icon : iconHome },
        { label:'Pasar Eksternal' ,route:'somewhere',icon : iconHome },
      ]
    },
  ]
  return (
    <AppShell.Navbar className={styles.navContainer}>
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