import * as React from 'react'
import { ChildComp } from './childComp'
import { MemoChildComp } from './memoChildComp'

export function StateUpdatePage() {
  const [val, setVal] = React.useState(0)

  function handleUpdateVal() {
    setVal((prev) => prev + 1)
  }

  console.log('Render componente pai', Math.random())

  return (
    <div className={'StateUpdate'}>
      <h1>State Update</h1>

      <div>
        Valor: {val}
      </div>
      <button onClick={handleUpdateVal}>
        Atualizar componente pai
      </button>

      <ChildComp />
      <MemoChildComp />
    </div>
  )
}