import * as React from 'react'
import { dataSource } from './datasource'
import debounce from 'lodash.debounce'
import { log } from '../../../lib/log'

export interface DeboucedProps {
  children?: any
}

function filterResult(str: string) {
  return dataSource.filter((item) => item.name.includes(str))
}

export function Debouced(props: DeboucedProps) {
  const [value, setValue] = React.useState('')
  const [filtered, setFiltered] = React.useState<{id: number, name: string}[]>()

  const debouncedFunction = React.useMemo(() => {
    return debounce((str: string) => {
      log('debounce')
      const result = filterResult(str)
      setFiltered(result)
    }, 300)
  }, [])

  React.useEffect(() => {
    log('change')
    debouncedFunction(value)
  }, [value, debouncedFunction])

  return (
    <div className={'Debouced'}>
      <input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />

      <ul>
        {filtered?.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}