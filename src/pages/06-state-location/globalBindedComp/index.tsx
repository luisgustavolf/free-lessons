import { MiniEnv } from './miniEnv'
import { UserContextProvider } from './userContext/provider'

export function GlobalBindedCompPage() {

  return (
    <div className={'GlobalBindedCompPage'}>
      <h1>Componente com estado global</h1>

      <UserContextProvider>
        <MiniEnv />
      </UserContextProvider>
    </div>
  )
}