import * as React from 'react'

export function Mouting() {
  const [value, setValue] = React.useState(0)

  console.log('re-render')

  React.useEffect(() => {
    console.log('ok!')
  }, [])

  return (
    <div className={'Mouting'}>
      Atual: {value}
      <br/>
      <button
        onClick={() => setValue((prev) => prev + 1)}
      >
        Soma
      </button>
    </div>
  )
}