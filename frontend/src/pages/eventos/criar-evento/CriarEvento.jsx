import React, { useState } from 'react'
import './CriarEvento.css'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CriarEvento = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [local, setLocal] = useState("");
    const [qtd_pessoas, setQtd_pessoas] = useState(0);
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");

    const criar_evento = async(e) => {
        e.preventDefault();
        await axios.post(`${API_URL}/eventos/criar`, {
            nome: nome,
            descricao: descricao,
            local: local,
            qtd_pessoas: qtd_pessoas,
            data: data,
            hora: hora
        }).then(() => {
            alert("Evento Criado com Sucesso!")
            navigate('/evento')
        }).catch((error) => {
            console.log(error)
            alert("Erro ao criar evento, tente novamente.")
        })
    }
  return (
    <div className="container" style={{
        color: 'black'
    }}>
        <Header />
        <div className="form-container">
            <form onSubmit={criar_evento} className="form-control">
                <p>Nome do evento:</p>
                <input type='text' className="input-control" onChange={(e) => setNome(e.target.value)}/>

                <p>Descrição:</p>
                <textarea className="text-area" onChange={(e) => setDescricao(e.target.value)} />

                <p>Local:</p>
                <input type='text' className="input-control" onChange={(e) => setLocal(e.target.value)} />

                <p>Quantidade de Pessoas:</p>
                <input type='number' className="input-control" onChange={(e) => setQtd_pessoas(e.target.value)} />

                <p>Data:</p>
                <input type='date' className="input-control" onChange={(e) => setData(e.target.value)} />

                <p>Hora:</p>
                <input type='text' className="input-control" onChange={(e) => setHora(e.target.value)} />

                <button type='submit' className="btn">Criar Evento</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default CriarEvento