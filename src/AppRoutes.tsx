import * as React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { L01JSXPage } from './pages/01-jsx'
import { L2ReactivePatterPage } from './pages/02-reactive-pattern'
import { L3ReactWithoutReactPage } from './pages/03-crazy-react'
import { L04ReactWayPage } from './pages/04-react-way'
import { L05RenderPage } from './pages/05-render'
import { StateUpdatePage } from './pages/05-render/stateUpdate'
import { RefUpdatePage } from './pages/05-render/refUpdate'
import { VarUpdatePage } from './pages/05-render/varUpdate'
import { L06StateLocationPage } from './pages/06-state-location'
import { LayoutCompPage } from './pages/06-state-location/layoutComp'
import { BehavoralCompPage } from './pages/06-state-location/behavoralComp'
import { GlobalBindedCompPage } from './pages/06-state-location/globalBindedComp'
import { L07UseStagePage } from './pages/07-useState'

export interface AppRoutesProps {
  children?: any
}

export function AppRoutes(props:AppRoutesProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/01-jsx' element={<L01JSXPage />}/>
        <Route path='/02-reactive-pattern' element={<L2ReactivePatterPage />}/>
        <Route path='/03-react-without-react' element={<L3ReactWithoutReactPage />}/>
        <Route path='/04-react-way' element={<L04ReactWayPage />}/>
        <Route path='/05-render'>
          <Route index element={<L05RenderPage />} />
          <Route path='state-update' element={<StateUpdatePage />}/>
          <Route path='ref-update' element={<RefUpdatePage />} />
          <Route path='var-update' element={<VarUpdatePage />} />
        </Route>
        <Route path='/06-state-location'>
          <Route index element={<L06StateLocationPage />} />
          <Route path='layout-comp' element={<LayoutCompPage />}/>
          <Route path='behavoral-comp' element={<BehavoralCompPage />} />
          <Route path='global-binded-comp' element={<GlobalBindedCompPage />} />
        </Route>
        <Route path='/07-use-state' element={<L07UseStagePage/>} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}