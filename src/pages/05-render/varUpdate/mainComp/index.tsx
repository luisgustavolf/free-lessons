import * as React from 'react'
import { ChildComp } from './childComp'
import { BoxedWrap } from '../../../../components/boxedWrap'
import { log } from '../../../../lib/log'

export function MainComp() {
  
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
    log(`Novo valor ${varValue}`)
  }

  // ------------------------------------------------
  // Render

  log('Componente pai')

  return (
    <BoxedWrap>
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
    </BoxedWrap>
  )
}