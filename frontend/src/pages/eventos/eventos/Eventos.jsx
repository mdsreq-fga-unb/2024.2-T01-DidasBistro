import React, { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Eventos.css";
import axios from "axios";

const Eventos = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [eventos, setEventos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState(null);

  useEffect(() => {
    const get_eventos = async () => {
      try {
        const result = await axios.get(`${API_URL}/eventos`);
        const sortedEventos = result.data.eventos.sort((a, b) => new Date(b.data) - new Date(a.data)); // Ordena eventos pela data (mais recente primeiro)
        setEventos(sortedEventos);
      } catch (error) {
        console.log(error);
      }
    };

    get_eventos();
  }, []);


  const filteredEventos = eventos.filter((evento) =>
    [
      evento.nome,
      evento.descricao,
      evento.local,
      evento.qtd_pessoas.toString(),
      new Date(evento.data).toLocaleDateString("pt-br"),
      evento.hora,
    ]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );


  const handleNavigateWithTransition = (path) => {
    setTargetPath(path);
    setIsTransitioning(true);
  };


  const handleAnimationComplete = () => {
    if (isTransitioning && targetPath) {
      navigate(targetPath);
    }
  };

  return (
    <div>
      <Header />
      <motion.div
        className="main_content"
        initial={{ opacity: 1 }}
        animate={isTransitioning ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="button-search-container">
          <input
            type="text"
            placeholder="Pesquisar evento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button
            onClick={() => handleNavigateWithTransition("/evento/criar")}
            className="btn"
          >
            Cadastrar Evento
          </button>
        </div>

        <div className="evento-scroll-container">
          <div className="evento-container">
            {filteredEventos.length === 0 ? (
              <p>Nenhum evento encontrado.</p>
            ) : (
              filteredEventos.map((evento, index) => (
                <div key={index} className="evento-card">
                  <h1>{evento.nome}</h1>
                  <p className="descricao"> Descrição: {evento.descricao.length > 26 ? evento.descricao.slice(0, 26) + "..." : evento.descricao}</p>
                  <p className="local"> Local: {evento.local}</p>
                  <p>Quantidade de pessoas: {evento.qtd_pessoas}</p>
                  <p>Data: {new Date(evento.data).toLocaleDateString("pt-br")}</p>
                  <p>Hora: {evento.hora}</p>

                  <div className="evento-card-buttons">
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateWithTransition(`/evento/editar/${evento._id}`);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateWithTransition(`/balance/${evento._id}`);
                      }}
                    >
                      Ver Balanço
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>


  );
};

export default Eventos;
