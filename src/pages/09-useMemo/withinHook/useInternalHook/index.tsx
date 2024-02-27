import * as React from 'react'
import { dataSource } from './datasource'

export interface UseInternalHookProps {
  value: string
}

export function useInternalHook(props:UseInternalHookProps) {
  
  const filtered = React.useMemo(() => {
    return dataSource.filter((item) => item.name.includes(props.value))
  }, [props.value])

  // const noMemo = dataSource.filter((item) => item.name.includes(props.value))  

  return {
    filtered
  }
}