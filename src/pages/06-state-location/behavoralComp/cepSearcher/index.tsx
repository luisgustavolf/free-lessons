import * as React from 'react'
import { ICepAddress } from './iCepAddress'
import styles from './styles.module.css'
import { useSearch } from './useSearch'

export interface CepSearcherProps {
  onSelect: (address: ICepAddress) => void
}

export function CepSearcher(props: CepSearcherProps) {
  const [value, setValue] = React.useState('')

  const service = useSearch({
    cep: value
  })

  function handleConfirm() {
    if (service.data)
      props.onSelect(service.data)
  }

  return (
    <div className={styles.wrap}>
      <div>
        <input
          placeholder='Digite um CEP'
          type="text"
          pattern="\d{5}-\d{3}"
          maxLength={9}
          value={value}
          onChange={(evt) => setValue(evt.target.value)}
        />

        {service.loading && 'Loading'}
      </div>
      {service.data &&
        <React.Fragment>
          <div>
            Resultado

            <ul>
              <li>{service.data.logradouro} {service.data.complemento}</li>
              <li>{service.data.bairro}</li>
              <li>{service.data.cidade} / {service.data.uf}</li>
            </ul>
          </div>
          <div>
            <button onClick={handleConfirm}>
              Confirmar
            </button>
          </div>
        </React.Fragment>
      }
    </div>
  )
}