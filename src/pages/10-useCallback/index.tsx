import { ItsAMemo } from './itsAMemo'

export interface L10UseCallbackPageProps {
  children?: any
}

export function L10UseCallbackPage(props:L10UseCallbackPageProps) {

  /** 
   * 1) Quando não precisa usar
   * 2) Uso padrão e as diferentes formas de funções
   * 3) uso em hooks
   * 4) É um useMemo, no fim do dia...
  */

  return (
    <div className={'L10UseCallbackPage'}>
        <h1>Use Callback</h1>
        {/* <NoNeed /> */}
        {/* <ReguarUse /> */}
        {/* <HookUse /> */}
        <ItsAMemo />
    </div>
  )
}