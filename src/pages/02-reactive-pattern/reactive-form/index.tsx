import * as React from 'react'

export function ReactiveForm() {
  const [hasMorInfo, setHasMoreInfo] = React.useState(false)
  const [extraInfo, setExtraInfo] = React.useState('')
  const [hasError, setHasError] = React.useState(false)

  // Extra info: Quem me afeta?
  React.useEffect(() => {
    if (!hasMorInfo)
      setExtraInfo('')
  }, [hasMorInfo])

  // Erros: Quem me afeta?
  React.useEffect(() => {
    if (hasMorInfo && !extraInfo)
      setHasError(true)
    else
      setHasError(false)
  }, [hasMorInfo, extraInfo])

  return (
    <div className={'SampleForm'}>
      <h2>Reativo</h2>

      <div>
        <input
          id='has-more-info'
          type='checkbox'
          checked={hasMorInfo}
          onChange={(evt) => setHasMoreInfo(evt.target.checked)}
        />
        <label htmlFor={'has-more-info'}>tem mais opções?</label>
      </div>

      <div>
        <label htmlFor={'extra-info'}>Informações extras</label><br />
        <input
          id='extra-info'
          value={extraInfo}
          disabled={!hasMorInfo}
          onChange={((evt) => setExtraInfo(evt.target.value))}
        />
        <br />
        <span>
          {hasError ? 'Informações extras obrigatórias' : '#moPaz'}
        </span>
      </div>

    </div>
  )
}