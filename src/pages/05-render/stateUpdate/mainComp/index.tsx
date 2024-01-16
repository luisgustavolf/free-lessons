import * as React from 'react'
import { log } from '../../../../lib/log'
import { BoxedWrap } from '../../../../components/boxedWrap'
import { MemoChildComp } from './memoChildComp'
import { ChildComp } from './childComp'

export function MainComp() {
  const [val, setVal] = React.useState(0)

  function handleUpdateVal() {
    setVal((prev) => prev + 1)
  }

  log('Render componente pai')

  return (
    <BoxedWrap>
      <div>
        Valor: {val}
      </div>
      <button onClick={handleUpdateVal}>
        Atualizar componente pai
      </button>

      <ChildComp />
      <MemoChildComp />
    </BoxedWrap >
  )
}