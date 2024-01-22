import * as React from 'react'
import styles from './styles.module.css'
import { UserInfo } from './userInfo'
import { UserBadge } from './userBadge'
import { UserUpdater } from './userUpdater'

export function MiniEnv() {  
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <UserBadge />
      </div>
      <div className={styles.body}>
        <UserInfo />
        <UserUpdater />
      </div>
    </div>
  )
}