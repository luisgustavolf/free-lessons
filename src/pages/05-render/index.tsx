import { Link, useLocation } from 'react-router-dom'

export function L05RenderPage() {
  const { pathname } = useLocation()

  return (
    <div className={'L05Render'}>
      <h1>Render e Re-render</h1>
      
      <ul>
        <li>
          <Link to={`${pathname}/state-update`}>State Update</Link>
        </li>
        <li>
          <Link to={`${pathname}/ref-update`}>Ref Update</Link>
        </li>
        <li>
          <Link to={`${pathname}/var-update`}>Var & Props Update</Link>
        </li>
      </ul>

    </div>
  )
}