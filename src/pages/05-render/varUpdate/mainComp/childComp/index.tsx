import * as React from 'react'
import { BoxedWrap } from '../../../../../components/boxedWrap'
import { log } from '../../../../../lib/log'

export interface ChildCompProps {
  someValue: number
}

export function ChildComp(props:ChildCompProps) {

  log('Componente filho atualizado', 'color:yellow')
  
  return (
    <BoxedWrap>
      Valor no componente filho:
      {props.someValue}
    </BoxedWrap>
  )
}