import * as React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home'
import { L01JSXPage } from './pages/01-jsx'
import { L2ReactivePatterPage } from './pages/02-reactive-pattern'
import { L3CrazyReactPage } from './pages/03-crazy-react'

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
        <Route path='/03-crazy-react' element={<L3CrazyReactPage />}/>
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}