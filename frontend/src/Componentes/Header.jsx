import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title"><strong>Didas </strong>Bistro</h1>
      <nav className="header-nav">
        <a className="nav-link" href="/estoque">
          Estoque
        </a>
        <a className="nav-link" href="/eventos">
          Eventos
        </a>
        <a className="nav-link" href="/funcionarios">
          Funcionarios
        </a>
      </nav>
    </header>
  );
};

export default Header;
