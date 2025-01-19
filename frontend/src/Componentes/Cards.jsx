import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <section className="cards-section">
      <div className="card">
        <h2 className="card-title">Estoque</h2>
        <div className="card-icon">🏠</div>
        
      </div>
      <div className="card">
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
