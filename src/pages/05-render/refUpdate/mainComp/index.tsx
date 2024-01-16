import * as React from 'react'
import { log } from '../../../../lib/log'
import { BoxedWrap } from '../../../../components/boxedWrap'

export function MainComp() {
  // ------------------------------------------------
  // State

  const [, setStateValue] = React.useState(0)

  function handleUpdateState() {
    setStateValue((prev) => prev + 1)
  }

  // ------------------------------------------------
  // Ref

  const refValue = React.useRef(0)

  function handleUpdateRefValue() {
    refValue.current = refValue.current + 1
    log(`Novo valor ${refValue.current}`)
  }

  log('Render com Ref')

  return (
    <BoxedWrap>
      <div>
        Valor: {refValue.current}
      </div>

      <button onClick={handleUpdateRefValue}>
        Atualizar Ref
      </button>

      <button onClick={handleUpdateState}>
        Atualizar State
      </button>
    </BoxedWrap>
  )
}