import React, { useState, useEffect } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import "./Eventos.css"
import axios from 'axios';


const Eventos = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    console.log(API_URL)

    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        const get_eventos = async() => {
            await axios.get(`${API_URL}/eventos`).then((result) => {
                setEventos(result.data.eventos)      
            }).catch((error) => {
                console.log(error)
            })
        }

        get_eventos();
    }, [])

  return (
    <div>
        <Header />
        <div className="main_content">
            <button onClick={() => navigate('/evento/criar')} className="btn">Cadastrar Evento</button>

            <div className="evento_container">
                {eventos.map((evento, index) => {
                    const date = new Date(evento.data);
                    return(
                        <div className="evento-card">
                            <h1>{evento.nome}</h1>
                            <p>{evento.descricao}</p>
                            <p><strong>Local:</strong> {evento.local}</p>
                            <p>Quantidade de pessoas: {evento.qtd_pessoas}</p>
                            <p>Data: {evento.data}</p>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Eventos