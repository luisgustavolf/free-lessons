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
        <li>
          <Link to={'/03-react-without-react'}>03 - React doidão</Link>
        </li>
        <li>
          <Link to={'/04-react-way'}>04 - O jeitão react</Link>
        </li>
        <li>
          <Link to={'/05-render'}>05 - Render e Re-render</Link>
        </li>
        <li>
          <Link to={'/06-state-location'}>06 - Localização do estado</Link>
        </li>
      </ul>
    </div>
  )
}