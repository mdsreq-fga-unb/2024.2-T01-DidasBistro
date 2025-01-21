import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CriarEvento from './pages/eventos/criar-evento/CriarEvento'
import Estoque from './pages/estoque/Estoque';
import Home from './pages/home/Home'
import Eventos from './pages/eventos/eventos/Eventos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/evento/criar" element={<CriarEvento/>} />
      <Route path="/evento" element={<Eventos />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/" element={<Home />}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
