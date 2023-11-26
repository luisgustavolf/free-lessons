import * as React from 'react'
import { ReactiveForm } from './reactive-form'
import { ImperativeForm } from './imperative-form'

export interface L2ReactivePatterPageProps {
  children?: any
}

export function L2ReactivePatterPage(props:L2ReactivePatterPageProps) {
  return (
    <div className={'L2ReactivePatterPage'}>
      <h1>Padrão reativo</h1>

      <ReactiveForm />
      <ImperativeForm />
    </div>
  )
}