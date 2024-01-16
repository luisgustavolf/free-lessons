import * as React from 'react'

export function ChildComp() {
  const [val, setVal] = React.useState(0)

  function handleUpdateVal() {
    setVal((prev) => prev + 1)
  }

  console.log('Render componente filho', Math.random())

  return (
    <div className={'child-comp'}>
      <div>
        Valor: {val}
      </div>

      <button onClick={handleUpdateVal} >
        Atualizar componente filho
      </button>
    </div>
  )
}