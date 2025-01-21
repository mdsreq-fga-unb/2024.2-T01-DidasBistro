import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cards.css";

const CardsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="cards-section">
      <div 
        role="button" 
        onClick={() => navigate("/estoque")} 
        className="card">
        <h2 className="card-title">Estoque</h2>
        <div className="card-icon">🏠</div>
      </div>

      <div 
        role="button" 
        onClick={() => navigate("/evento")} 
        className="card">
        <h2 className="card-title">Eventos</h2>
        <div className="card-icon">📅</div>
      </div>

      <div 
        role="button" 
        onClick={() => navigate("/funcionarios")} 
        className="card">
        <h2 className="card-title">Funcionários</h2>
        <div className="card-icon">👤</div>
      </div>
    </section>
  );
};

export default CardsSection;
