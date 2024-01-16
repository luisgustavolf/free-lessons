import * as React from 'react'

export const MemoChildComp = React.memo(() => {
  const [val, setVal] = React.useState(0)

  function handleUpdateVal() {
    setVal((prev) => prev + 1)
  }
  
  console.log('Render componente filho memoizado', Math.random())

  return (
    <div className={'child-comp'}>
      <div>
        Valor: {val}
      </div>

      <button onClick={handleUpdateVal}>
        Atualizar componente filho memoizado
      </button>
    </div>
  )
})