import * as React from 'react'
import { ChildComp } from './childComp'

export function VarUpdatePage() {
  
  // ------------------------------------------------
  // State

  const [, setStateValue] = React.useState(0)

  function handleUpdateStateValue() {
    setStateValue((prev) => prev + 1)
  }

  // ------------------------------------------------
  // Var

  let varValue = 0

  function handleUpdateVarValue() {
    varValue = varValue + 1
    console.log(`Novo valor ${varValue}`)
  }

  // ------------------------------------------------
  // Render

  console.log('Render com var', varValue, Math.random())

  return (
    <div className={'RefUpdatePage'}>
      <h1>Var & Props Update</h1>

      <div>
        Valor: {varValue}
      </div>

      <button onClick={handleUpdateVarValue}>
        Atualizar Var
      </button>

      <button onClick={handleUpdateStateValue}>
        Atualizar State
      </button>

      <ChildComp someValue={varValue} />
    </div>
  )
}