import * as React from 'react'
import { CepSearcher } from './cepSearcher'
import { log } from '../../../lib/log'
import { ICepAddress } from './cepSearcher/iCepAddress'

export function BehavoralCompPage() {

  function handleCepSelect(address: ICepAddress) {
    log(JSON.stringify(address))
  }

  return (
    <div className={'BehavoralCompPage'}>
      <h1>Componente com comportamento interno</h1>

      <CepSearcher onSelect={handleCepSelect} />
    </div>
  )
}