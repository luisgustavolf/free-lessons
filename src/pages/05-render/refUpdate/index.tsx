import * as React from 'react'

export interface RefUpdatePageProps {
  children?: any
}

export function RefUpdatePage(props: RefUpdatePageProps) {
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
    console.log(`Novo valor ${refValue.current}`)
  }

  console.log('Render com Ref', Math.random())

  return (
    <div className={'RefUpdatePage'}>
      <h1>Ref Update</h1>

      <div>
        Valor: {refValue.current}
      </div>

      <button onClick={handleUpdateRefValue}>
        Atualizar Ref
      </button>

      <button onClick={handleUpdateState}>
        Atualizar State
      </button>
    </div>
  )
}