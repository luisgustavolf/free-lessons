import * as React from 'react'
import { log } from '../../../lib/log'

function getNames() {
  return ['jose', 'maria', 'galvao']
}


export function ItsAMemo() {
  const [list, setList] = React.useState<string[]>()
  const [, setValue] = React.useState(0)

  const handleOnClick = () => {
    setValue(Math.random())
    log('click!')
  }

  const load = React.useMemo(() => {
    return () => {
      log('carregou')
      setList(getNames())
    }
  }, [])

  React.useEffect(() => {
    load()
  }, [load])

  return (
    <div className={'ReguarUse'}>
      <h2>Its A Memo</h2>

      {list?.map((item, idx) =>
        <div key={idx}>{item}</div>
      )}

      <button onClick={handleOnClick}>Click</button>
    </div>
  )
}