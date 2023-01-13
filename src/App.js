import React from 'react'
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Booking from './Pages/Booking'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path={`/`} element={<Dashboard />} />
      <Route path={`/Booking`} element={<Booking />} />
    </Routes>
    </Sidebar>
  </BrowserRouter>
  )
}

export default App