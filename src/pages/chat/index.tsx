import * as React from 'react'
import styles from './styles.module.css'
import { Outlet } from 'react-router-dom'
import { SideBar } from './sideBar'

export function ChatPage() {

  return (
    <div className={'ChatPage'}>
      <h1>Chat</h1>

      <div className={styles.canvas}>
        <div>
          <SideBar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}