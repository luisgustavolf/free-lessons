import * as React from 'react'
import { ContactContext } from '../contactContext/context'

export interface MessageHistoryProps {
}

export function MessageHistory(props:MessageHistoryProps) {
  const contactContext = React.useContext(ContactContext)

  return (
    <div className={'MessageHistory'}>
      historico de { contactContext.contactId }

      <button onClick={contactContext.refresh}>
        refresh
      </button>
    </div>
  )
}