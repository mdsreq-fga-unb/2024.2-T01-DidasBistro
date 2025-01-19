import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header';
import Cards from './Componentes/Cards';
import Footer from './Componentes/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Cards></Cards>
      <Footer></Footer>
    </>
  )
}

export default App
