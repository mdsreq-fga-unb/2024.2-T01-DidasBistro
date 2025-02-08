import React, { useState } from 'react';
import './CriarEvento.css';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CriarEvento = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [local, setLocal] = useState("");
  const [qtd_pessoas, setQtd_pessoas] = useState(0);
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const criar_evento = async (e) => {
    e.preventDefault();
    await axios.post(`${API_URL}/eventos/criar`, {
      nome: nome,
      descricao: descricao,
      local: local,
      qtd_pessoas: qtd_pessoas,
      data: data,
      hora: hora
    }).then(() => {
      alert("Evento Cadastrado com Sucesso!");
      navigate('/evento');
    }).catch((error) => {
      console.log(error);
      alert("Erro ao cadastrar evento, tente novamente.");
    });
  };

  return (
    <div className="container" style={{ color: 'black' }}>
      <Header />
      <div className="form-container">
        <form onSubmit={criar_evento} className="form-container">
          <div className="form-content">
            <h2>Cadastrar Evento</h2>

            <div className="form-field">
              <label>Nome do Evento:</label>
              <input
                type="text"
                className="input-control"
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Descrição:</label>
              <textarea
                className="text-area"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Local:</label>
              <input
                type="text"
                className="input-control"
                onChange={(e) => setLocal(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Quantidade de Pessoas:</label>
              <input
                type="number"
                className="input-control"
                onChange={(e) => setQtd_pessoas(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Data:</label>
              <input
                type="date"
                className="input-control"
                onChange={(e) => setData(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Hora:</label>
              <input
                type="text"
                className="input-control"
                onChange={(e) => setHora(e.target.value)}
              />
            </div>

            <button type="submit" className="btn">Cadastrar Evento</button>

            {/* Botão de Voltar */}
            <button
              onClick={() => navigate('/evento')}
              className="btn voltar-btn"
              type="button"
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CriarEvento;
