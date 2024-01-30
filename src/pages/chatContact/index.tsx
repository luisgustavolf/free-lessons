import * as React from 'react'
import { useParams } from 'react-router-dom'
import { MessageHistory } from './messageHistory'
import { ContactContextProvider } from './contactContext/provider'

export function ChatContact() {
  const { id } = useParams()

  return (
    <div className={'ChatContact'}>
      <h2>Contato {id} </h2>

      <ContactContextProvider idContact={id}>
        <MessageHistory />
      </ContactContextProvider>
    </div>
  )
}