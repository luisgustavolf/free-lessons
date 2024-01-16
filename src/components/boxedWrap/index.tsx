import * as React from 'react'
import styles from './styles.module.css'

interface BoxedWrapProps {
  children?: React.ReactNode
}

export function BoxedWrap(props: BoxedWrapProps) {

  return (
    <div className={styles.wrap}>
      {props.children}
    </div>
  )
}