import React from 'react'
import './style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Booking from './Pages/Booking'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Navbar/>
    <Routes>
      <Route path={`/`} element={<Dashboard />} />
      <Route path={`/Booking`} element={<Booking />} />
    </Routes>
    </Sidebar>
  </BrowserRouter>
  )
}

export default App