import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

export interface L06StateLocationPageProps {
  children?: any
}

export function L06StateLocationPage(props: L06StateLocationPageProps) {

  const { pathname } = useLocation()

  return (
    <div className={'L06StateLocationPage'}>
      <h1>Localização de estado</h1>

      <ul>
        <li>
          <Link to={`${pathname}/layout-comp`}>Componente de layout</Link>
        </li>
        <li>
          <Link to={`${pathname}/behavoral-comp`}>Componente com algum comportamento interno</Link>
        </li>
        <li>
          <Link to={`${pathname}/global-binded-comp`}>Componente ligado a estado global</Link>
        </li>
      </ul>

    </div>
  )
}