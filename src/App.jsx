import React from 'react'
import Dashboard from './dashboard/Dashboard'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    {/* <App /> */}
    <Dashboard />
  </BrowserRouter>
  )
}

export default App