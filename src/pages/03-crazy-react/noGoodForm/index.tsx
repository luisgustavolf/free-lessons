import * as React from 'react'

export function NoGoodForm() {
  const loginRef = React.createRef<HTMLInputElement>()
  const passwordRef = React.createRef<HTMLInputElement>()

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const login = loginRef.current?.value
    const password = passwordRef.current?.value
    alert(`${login} / ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Não aconselhável</h2>
      <div>
        <label htmlFor='login'>Login</label>
        <input id='login' ref={loginRef} />
      </div>
      <div>
        <label htmlFor='password'>Senha</label>
        <input id='password' ref={passwordRef} />
      </div>
      <button type='submit'>
        Salvar
      </button>
    </form>
  )
}