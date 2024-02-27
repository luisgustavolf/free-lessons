import * as React from 'react'
import { dataSource } from './datasource'

export interface NotADifferenceProps {
  children?: any
}

export function NotADifference(props: NotADifferenceProps) {
  const [value, setValue] = React.useState('')
  const [value2, ] = React.useState('')

  const filteredCount = React.useMemo(() => {
    const result = dataSource.filter((item) => item.name.includes(value))
    return result.length
  }, [value])

  // const filteredCount2 = dataSource.filter((item) => item.name.includes(value)).length

  const valuesAreDifferent = React.useMemo(() => {
    return value !== value2
  }, [value, value2])

  // const valuesAreDifferent2 = value !== value2

  React.useEffect(() => {}, [valuesAreDifferent])

  return (
    <div className={'NotADifference'}>
      <input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />

      {filteredCount}
    </div>
  )
}