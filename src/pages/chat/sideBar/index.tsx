import { Link, useLocation } from 'react-router-dom'

export function SideBar() {
  const { pathname } = useLocation()

  return (
    <div className={'SideBar'}>
      <ul>
        <li>
          <Link to={`${pathname}contat/1`}>Contato 1</Link>
        </li>
      </ul>
    </div>
  )
}