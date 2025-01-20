import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CriarEvento from './pages/eventos/criar-evento/CriarEvento'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/evento/criar"/>} />
      <Route path="/evento/criar" element={<CriarEvento/>} />
    </Routes>

    </BrowserRouter>
  )
}

export default App
