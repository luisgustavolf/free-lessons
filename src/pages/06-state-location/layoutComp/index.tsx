import * as React from 'react'
import { PersonalCard } from './personalCard'
import { log } from '../../../lib/log'

export function LayoutCompPage() {

  return (
    <div className={'LayoutCompPage'}>
      <h1>Componente de Layout</h1>

      <PersonalCard
        avatar='https://placehold.co/100x100/png'
        name='José da Silva'
        ocupation='Desenvolvedor'
        onClick={() => log('onClick')}
        onEdit={() => log('onEdit', 'color: yellow')}
      />
    </div>
  )
}