import * as React from 'react'

export function Regular() {
  const [value, setValue] = React.useState(0)
  const [value2, setValue2] = React.useState(0)

  console.log('re-render')

  React.useEffect(() => {
    console.log('alterou')
    setValue2(value * 2)
  }, [value])

  return (
    <div className={'Mouting'}>
      Atual: {value} / {value2}
      <br/>
      <button
        onClick={() => setValue((prev) => prev + 1)}
      >
        Soma
      </button>
    </div>
  )
}