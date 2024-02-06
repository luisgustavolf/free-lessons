import * as React from 'react'
import { log } from '../../../lib/log'

export function InfiniteRender() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    log(`${value}`)
    setValue((value) => value * 10)
  }, [value])

  return (
    <div className={'Mouting'}>
      Atual: {value}
      <br/>
      <button
        onClick={() => setValue((prev) => prev + 1)}
      >
        Soma
      </button>
    </div>
  )
}