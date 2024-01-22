import * as React from 'react'
import { UserContext } from '../../userContext/contex'

export function UserInfo() {
  const context = React.useContext(UserContext)

  return (
    <div className={'UserInfo'}>
      Olá, {context.user?.name}!
    </div>
  )
}