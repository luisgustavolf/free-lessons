import * as React from 'react'
import { Regular } from './regular'
import { WithinHook } from './withinHook'
import { Debouced } from './debounced'
import { NotADifference } from './notADifference'

export function L09UseMemoPage() {

  /**
  * 1) Uso padrão
  * 2) Uso em hooks e os tipos de comparação
  * 3) Uso com factories como debounce
  * 4) Situações que não fazem muita diferença  
  */

  return (
    <div className={'L09UseMemoPage'}>
      <h1>Use Memo</h1>

      {/* <Regular /> */}
      {/* <WithinHook /> */}
      {/* <Debouced /> */}
      <NotADifference />
    </div>
  )
}