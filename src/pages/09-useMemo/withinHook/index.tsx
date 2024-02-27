import * as React from 'react'
import { useInternalHook } from './useInternalHook'
import { log } from '../../../lib/log'

export interface WithinHookProps {
  children?: any
}

export function WithinHook(props: WithinHookProps) {
  const [value, setValue] = React.useState('')
  const [value2, setValue2] = React.useState('')

  const filtering = useInternalHook({ value })

  const { filtered } = filtering

  React.useEffect(() => {
    log('algo')
  }, [filtered])

  return (
    <div className={'WithinHook'}>

      <input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />

      <input
        value={value2}
        onChange={(evt) => setValue2(evt.target.value)}
      />
    </div>
  )
}