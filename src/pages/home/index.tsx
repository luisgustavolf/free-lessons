import * as React from 'react'
import { Link } from 'react-router-dom'

export interface HomePageProps {
  children?: any
}

export function HomePage(props: HomePageProps) {
  return (
    <div className={'HomePage'}>
      <h1>Curso de React do Luis</h1>

      <ul>
        <li>
          <Link to={'/01-jsx'}>01 - JSX</Link>
        </li>
        <li>
          <Link to={'/02-reactive-pattern'}>02 - Padrão Reativo</Link>
        </li>
      </ul>
    </div>
  )
}