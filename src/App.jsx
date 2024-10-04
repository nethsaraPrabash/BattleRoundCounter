import React from 'react'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import Home from './components/home'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App