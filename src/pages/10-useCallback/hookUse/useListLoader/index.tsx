import * as React from 'react'
import { log } from '../../../../lib/log'

function getNames() {
  return ['jose', 'maria', 'galvao']
}

export function useListLoader() {
  const [list, setList] = React.useState<string[]>()
  
  const load = React.useCallback(() => {
    log('carregou')
    setList(getNames())
  }, [])

  return {
    list,
    load
  }
}