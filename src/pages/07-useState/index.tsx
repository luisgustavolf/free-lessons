import * as React from 'react'
import { ClassComp } from './classComp'
import { FuncComp } from './funcComp'

export function L07UseStagePage() {

  return (
    <div className={'L07UseStagePage'}>
      <h1>Use State</h1>
      <ClassComp />
      <FuncComp />
    </div>
  )
}