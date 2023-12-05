import * as React from 'react'

export function L04ReactWayPage() {
  const [counter, setCounter] = React.useState(0)
  const [lastValAt, setLastValAt] = React.useState<Date>()

  function reset() {
    setCounter(0)
  }

  function add() {
    setCounter((prev) => prev + 1)
  }

  function substract() {
    setCounter((prev) => prev - 1)
  }

  React.useEffect(() => {
    if (counter === 0)
      setLastValAt(undefined)
    else if (counter % 5 === 0)
      setLastValAt(new Date())
  }, [counter])

  console.log(`render ${Math.random()}`)

  return (
    <div className={'L04ReactWayPage'}>
      <h1>Contador</h1>

      <div>
        <button onClick={substract}>-</button>
        <span>{counter}</span>
        <button onClick={add}>+</button>
      </div>

      <div>
        Última contagem até 5 em: {lastValAt?.toLocaleString()}
      </div>

      <div>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  )
}