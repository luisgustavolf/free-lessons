import * as React from 'react'
import { ICepAddress } from '../iCepAddress'
import debounce from 'lodash.debounce'
import { log } from '../../../../../lib/log'
import { ISearchReturnDto } from './iSearchReturnDto'
import { getAddressFromDto } from './helpers'

export interface UseSearchProps {
  cep?: string
}

export function useSearch(props: UseSearchProps) {
  const [loading, setLoading] = React.useState(false)
  const [data, setData] = React.useState<ICepAddress>()

  const search = React.useCallback(async (cep: string) => {
    if (!/\d{5}-\d{3}/.test(cep)) return
    try {
      setLoading(true)
      const url = `https://viacep.com.br/ws/${cep}/json/`
      const response = await fetch(url)
      const json = (await response.json()) as ISearchReturnDto
      setData(getAddressFromDto(json))
    } catch (error: any) {
      log(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const debouncedSearch = React.useMemo(() => {
    return debounce(search, 500)
  }, [search])

  React.useEffect(() => {
    if (props.cep)
      debouncedSearch(props.cep)
    else
      setData(undefined)
  }, [props.cep, debouncedSearch])

  return {
    loading,
    data
  }
}