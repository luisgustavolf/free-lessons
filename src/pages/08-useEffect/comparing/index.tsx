import * as React from 'react'
import { log } from '../../../lib/log'

export function Comparing() {
  const [value, setValue] = React.useState(0)

  const myVal = ""

  React.useEffect(() => {
    log(myVal)
  }, [myVal])

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