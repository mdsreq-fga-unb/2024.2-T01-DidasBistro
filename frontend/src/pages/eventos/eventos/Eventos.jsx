import React, { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Eventos.css";
import axios from "axios";

const Eventos = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [eventos, setEventos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const get_eventos = async () => {
      try {
        const result = await axios.get(`${API_URL}/eventos`);
        setEventos(result.data.eventos);
      } catch (error) {
        console.log(error);
      }
    };

    get_eventos();
  }, []);

  // Filtragem de eventos baseada no termo de pesquisa
  const filteredEventos = eventos.filter((evento) =>
    [
      evento.nome,
      evento.descricao,
      evento.local,
      evento.qtd_pessoas.toString(),
      evento.data,
      evento.hora,
    ]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Header />
      <div className="main_content">
        <div className="button-search-container">
          {/* Barra de pesquisa */}
          <input
            type="text"
            placeholder="Pesquisar evento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          {/* Botão de cadastro */}
          <button onClick={() => navigate("/evento/criar")} className="btn">
            Cadastrar Evento
          </button>
        </div>

        <div className="evento-container">
          {filteredEventos.length === 0 ? (
            <p>Nenhum evento encontrado.</p>
          ) : (
            filteredEventos.map((evento, index) => (
              <div
                role="button"
                onClick={() => navigate(`/balance/${evento._id}`)}
                key={index}
                className="evento-card"
              >
                <h1>{evento.nome}</h1>
                <p>Descrição: {evento.descricao}</p>
                <p>
                  <strong>Local:</strong> {evento.local}
                </p>
                <p>Quantidade de pessoas: {evento.qtd_pessoas}</p>
                <p>Data: {evento.data}</p>
                <p>Hora: {evento.hora}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Eventos;
