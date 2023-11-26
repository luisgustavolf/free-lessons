import * as React from 'react'
import { NoGoodForm } from './noGoodForm'
import { GoodForm } from './goodForm'

export function L3ReactWithoutReactPage() {

  return (
    <React.Fragment>
      <h1>React sem react</h1>

      <NoGoodForm />
      <GoodForm />
    </React.Fragment>
  )
}