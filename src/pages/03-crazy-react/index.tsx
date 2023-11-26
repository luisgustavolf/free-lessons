import * as React from 'react'
import { NoGoodForm } from './noGoodForm'
import { GoodForm } from './goodForm'

export function L3CrazyReactPage() {

  return (
    <React.Fragment>
      <h1>Crazy React</h1>

      <NoGoodForm />
      <GoodForm />
    </React.Fragment>
  )
}