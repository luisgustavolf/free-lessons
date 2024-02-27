import * as React from 'react'
import { dataSource } from './datasource'
import { log } from '../../../lib/log'

export interface RegularProps {
  children?: any
}

export function Regular(props:RegularProps) {
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')

  const filtered = React.useMemo(() => {
    log('memo')
    return dataSource.filter((item) => item.name.includes(value))
  }, [value])

  const noMemo = dataSource.filter((item) => item.name.includes(value))  
  log('rerender')

  return (
    <div className={'Regular'}>
      <input 
        value={value} 
        onChange={(evt) => setValue(evt.target.value)}
      />

      <input 
        value={value2} 
        onChange={(evt) => setValue2(evt.target.value)}
      />

      <ul>
        {filtered.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>

      <ul>
        {noMemo.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}