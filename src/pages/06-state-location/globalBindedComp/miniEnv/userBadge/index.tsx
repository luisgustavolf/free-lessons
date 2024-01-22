import * as React from 'react'
import styles from './styles.module.css'
import { UserContext } from '../../userContext/contex'

export function UserBadge() {
  const context = React.useContext(UserContext)
  const nameParts = context.user?.name.split(' ')

  return (
    <div className={styles.wrap}>
      {nameParts?.[0]}
    </div>
  )
}