import * as React from 'react';

function req() {
  return new Promise<void>((res) => {
    setTimeout(() => {
      console.log('executou')
      res()
    }, 1000);
  })
}

export function Async() {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    req().then(() => {
      console.log('outra coisa!')
    })
  }, [value])

  return (
    <div className={'Mouting'}>
      Atual: {value}
      <br />
      <button
        onClick={() => setValue((prev) => prev + 1)}
      >
        Soma
      </button>
    </div>
  )
}