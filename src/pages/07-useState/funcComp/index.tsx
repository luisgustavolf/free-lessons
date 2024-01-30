import * as React from 'react'

export interface FuncCompProps { }

export function FuncComp(props: FuncCompProps) {
  const [counter, setCounter] = React.useState(0)

  function add() {
    setCounter((prev) => prev + 1)
  }

  function subtract() {
    setCounter((prev) => prev - 1)
  }

  return (
    <div className={'FuncComp'}>
      <h2>
        Contador (com function)
      </h2>

      <button onClick={subtract}>-</button>
      <span>{counter}</span>
      <button onClick={add}>+</button>
    </div>
  )
}