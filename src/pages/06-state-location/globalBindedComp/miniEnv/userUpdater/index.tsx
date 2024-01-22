import * as React from 'react'
import { UserContext } from '../../userContext/contex'
import { getUser } from './helpers'

export function UserUpdater() {
  const context = React.useContext(UserContext)

  function handleClick() {
    const newUser = getUser()
    context.update(newUser)
  }

  return (
    <button onClick={handleClick}>
      Atualiar usuário
    </button>
  )
}