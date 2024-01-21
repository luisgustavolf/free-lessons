import * as React from 'react'
import styles from './styles.module.css'

export interface PersonalCardProps {
  avatar: string
  name: string
  ocupation: string
  onClick: () => void
  onEdit: () => void
}

export function PersonalCard(props: PersonalCardProps) {

  function handleOnEdit(evt: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    evt.stopPropagation()
    props.onEdit()
  }

  return (
    <div className={styles.wrap} onClick={props.onClick}>
      <img src={props.avatar} alt='avatar' />
      <div>
        <div className={styles.title}>{props.name}</div>
        <div>{props.ocupation}</div>
        <div onClick={handleOnEdit}>
          <button>Editar</button>
        </div>
      </div>
    </div>
  )
}