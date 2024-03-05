import * as React from 'react'
import { log } from '../../../lib/log'
import { useListLoader } from './useListLoader'



export function HookUse() {
  const [, setValue] = React.useState(0)

  const {list, load }  = useListLoader()

  const handleOnClick = () => {
    setValue(Math.random())
    log('click!')
  }

  React.useEffect(() => {
    load()
  }, [load])

  return (
    <div className={'ReguarUse'}>
      {list?.map((item, idx) => 
        <div key={idx}>{item}</div>
      )}

      <button onClick={handleOnClick}>Click</button>
    </div>
  )
}