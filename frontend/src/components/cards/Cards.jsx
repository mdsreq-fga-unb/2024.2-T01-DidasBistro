import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom"

const Cards = () => {
    const navigate = useNavigate();
  return (
    <section className="cards-section">
      <div className="card">
        <h2 className="card-title">Estoque</h2>
        <div className="card-icon">🏠</div>
        
      </div>
      <div role="button" onClick={() => navigate("/evento")} className="card">
        <h2 className="card-title">Eventos</h2>
        <div className="card-icon">📅</div>

      </div>
      <div className="card">
        <h2 className="card-title">Funcionários</h2>
        <div className="card-icon">👤</div>
        
      </div>
    </section>
  );
};

export default Cards;
