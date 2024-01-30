import * as React from 'react'
import { ContactContext } from './context'

export interface ContactContextProviderProps {
  idContact?: string
  children: React.ReactNode
}

export function ContactContextProvider(props:ContactContextProviderProps) {
  const refreshHistory = React.useCallback(() => {
    console.log('refresh')
  }, [])
  
  return (
    <ContactContext.Provider 
    value={{
      contactId: props.idContact,
      refresh: refreshHistory  
    }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}