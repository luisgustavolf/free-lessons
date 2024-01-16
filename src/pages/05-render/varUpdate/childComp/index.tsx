import * as React from 'react'

export interface ChildCompProps {
  someValue: number
}

export function ChildComp(props:ChildCompProps) {

  console.log('Componente filho', Math.random())
  
  return (
    <div className={'ChildComp'}>
      Valor no componente filho:
      {props.someValue}
    </div>
  )
}