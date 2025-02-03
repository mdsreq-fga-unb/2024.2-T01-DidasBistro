import React, { useState, useEffect } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import "./Eventos.css"
import axios from 'axios';

const Eventos = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const [eventos, setEventos] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        const get_eventos = async () => {
            await axios.get(`${API_URL}/eventos`).then((result) => {
                setEventos(result.data.eventos)
            }).catch((error) => {
                console.log(error)
            })
        }

        get_eventos();
    }, [])

    // Função para filtrar os eventos com base no termo de pesquisa
    const filteredEventos = eventos.filter(evento => 
        evento.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.local.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.qtd_pessoas.toString().includes(searchTerm) ||
        evento.data.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evento.hora.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return (
        <div>
            <Header />
            <div className="main_content">
                <div className="button-search-container">
                    {/* Barra de pesquisa */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Pesquisar evento..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            className="search-input"
                        />
                    </div>
    
                    <button onClick={() => navigate('/evento/criar')} className="btn">
                        Cadastrar Evento
                    </button>
                </div>
    
                <div className="evento_container">
                    {filteredEventos.length === 0 ? (
                        <p>Nenhum evento encontrado.</p>
                    ) : (
                        filteredEventos.map((evento, index) => {
                            const date = new Date(evento.data);
                            return (
                                <div key={index} className="evento-card">
                                    <h1>{evento.nome}</h1>
                                    <p>Descrição: {evento.descricao}</p>
                                    <p>Local:{evento.local}</p>
                                    <p>Quantidade de pessoas: {evento.qtd_pessoas}</p>
                                    <p>Data: {evento.data}</p> 
                                    <p>Hora: {evento.hora}</p>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
    
            <Footer />
        </div>
    )
}    

export default Eventos;
