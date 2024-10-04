import React from 'react'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import Home from './components/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App