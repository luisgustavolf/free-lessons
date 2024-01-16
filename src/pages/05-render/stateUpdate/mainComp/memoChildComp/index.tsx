import * as React from 'react'
import { log } from '../../../../../lib/log'
import { BoxedWrap } from '../../../../../components/boxedWrap'

export const MemoChildComp = React.memo(() => {
  const [val, setVal] = React.useState(0)

  function handleUpdateVal() {
    setVal((prev) => prev + 1)
  }

  log('Componente filho memoizado atualizado', 'color: magenta')

  return (
    <BoxedWrap>
      <div>
        Valor: {val}
      </div>

      <button onClick={handleUpdateVal}>
        Atualizar componente filho memoizado
      </button>
    </BoxedWrap>
  )
})