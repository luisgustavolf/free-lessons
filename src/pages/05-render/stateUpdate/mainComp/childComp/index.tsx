import * as React from 'react'
import { log } from '../../../../../lib/log'
import { BoxedWrap } from '../../../../../components/boxedWrap'

export function ChildComp() {
  const [val, setVal] = React.useState(0)

  function handleUpdateVal() {
    setVal((prev) => prev + 1)
  }

  log('Componente filho atualizado', 'color: yellow')

  return (
    <BoxedWrap>
      <div>
        Valor: {val}
      </div>

      <button onClick={handleUpdateVal} >
        Atualizar componente filho
      </button>
    </BoxedWrap>
  )
}