import * as React from 'react'
import { log } from '../../../lib/log'

export function NoNeed() {
  const [value, setValue] = React.useState(0)

  const handleOnClick = React.useCallback(() => {
    setValue(Math.random())
    log('click!')
  }, [])

  return (
    <div className={'NoNeed'}>
      {value}
      <button onClick={handleOnClick}>Click</button>
    </div>
  )
}