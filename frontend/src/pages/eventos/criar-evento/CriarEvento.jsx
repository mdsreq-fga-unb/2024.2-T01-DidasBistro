import React from 'react'
import './CriarEvento.css'

const CriarEvento = () => {
  return (
    <div className="container">
        <header>
            <div className="logo">Dida's Bistrô</div>
            <nav>
                <a href="#">Estoque</a>
                <a href="#">Eventos</a>
                <a href="#">Funcionários</a>
            </nav>
        </header>
        <aside className="sidebar">
            <h2>EVENTOS</h2>
            <input type="text" placeholder="Pesquisar..." />
        </aside>
        <main>
            <div className="buttons">
                <button>Cadastrar Evento</button>
            </div>   
        </main>
        <footer>
            <div>Dida's Bistrô</div>
            <nav>
                <a href="#">Estoque</a>
                <a href="#">Eventos</a>
                <a href="#">Funcionário</a>
            </nav>
        </footer>
    </div>
  )
}

export default CriarEvento