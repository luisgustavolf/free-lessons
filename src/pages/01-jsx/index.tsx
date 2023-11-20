import { Comp } from './comp'

export interface L01JSXPageProps {
  children?: any
}

export function L01JSXPage(props: L01JSXPageProps) {
  return (
    <div className={'L01JSXPage'}>
      <Comp />
    </div>
  )
}