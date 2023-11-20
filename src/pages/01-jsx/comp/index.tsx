import * as React from 'react'

export interface CompProps {
  children?: any
}

export function Comp(props:CompProps) {
  const [counter, setCounter] = React.useState(0)

  function handleClick() {
    console.log('opa')
    setCounter((prev) => prev + 1)
  }

  return (
    <div className={'Comp'}>
      {counter}
      <button onClick={handleClick}>Opa!</button>
      <Comp3 subComp={<Comp2 />} />
    </div>
  )
}

export function Comp2() {
  return (
    <div className={'Comp'}>
    </div>
  )
}

export interface Comp3Props {
  subComp?: any
}

export function Comp3(props:Comp3Props) {
  return (
    <div className={'Comp'}>
      {props.subComp}
    </div>
  )
}