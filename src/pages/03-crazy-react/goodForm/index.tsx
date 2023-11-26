import * as React from 'react'

export function GoodForm() {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    alert(`${login} / ${password}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Aconselhável</h2>
      <div>
        <label htmlFor='login'>Login</label>
        <input id='login' value={login} onChange={(evt) => setLogin(evt.target.value)} />
      </div>
      <div>
        <label htmlFor='password'>Senha</label>
        <input id='password' value={password} onChange={(evt) => setPassword(evt.target.value)} />
      </div>
      <button type='submit'>
        Salvar
      </button>
    </form>
  )
}