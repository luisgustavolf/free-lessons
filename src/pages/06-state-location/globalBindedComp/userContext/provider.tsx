import * as React from 'react'
import { UserContext } from './contex'
import { IUserInfo } from './iUserContextValues'

export interface UserContextProviderProps {
  children?: React.ReactNode
}

export function UserContextProvider(props: UserContextProviderProps) {
  const [data, setData] = React.useState<IUserInfo>({
    id: 'fcefd401-5dab-4d36-976c-9403cbcd83b2',
    name: 'João da Silva'
  })

  const update = React.useCallback((user: IUserInfo) => { 
    setData(user)
  }, [])

  return (
    <UserContext.Provider value={{ user: data, update }}>
      {props.children}
    </UserContext.Provider>
  )
}