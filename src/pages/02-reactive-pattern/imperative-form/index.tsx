import * as React from 'react'

export function ImperativeForm() {
  const [hasMorInfo, setHasMoreInfo] = React.useState(false)
  const [extraInfo, setExtraInfo] = React.useState('')
  const [hasError, setHasError] = React.useState(false)

  function handleCheckBoxChange(isChecked: boolean) {
    if (!isChecked) {
      setExtraInfo('')
      setHasError(false)
    } else {
      setHasError(true)
    }
    setHasMoreInfo(isChecked)
  }
  
  function handleInputChange(content: string) {
    if (content)
      setHasError(false)
    else 
      setHasError(true)
    setExtraInfo(content)
  }

  return (
    <div className={'SampleForm'}>
      <h2>Imperativo</h2>
      <div>
        <input
          id='has-more-info'
          type='checkbox'
          checked={hasMorInfo}
          onChange={(evt) => handleCheckBoxChange(evt.target.checked)}
        />
        <label htmlFor={'has-more-info'}>tem mais opções?</label>
      </div>
      <div>
        <label htmlFor={'extra-info'}>Informações extras</label><br />
        <input 
          id='extra-info' 
          value={extraInfo} 
          disabled={!hasMorInfo}
          onChange={((evt) => handleInputChange(evt.target.value))} 
        />
        <br/>
        <span>
          {hasError ? 'Informações extras obrigatórias' : '#moPaz'}
        </span>
      </div>
    </div>
  )
}