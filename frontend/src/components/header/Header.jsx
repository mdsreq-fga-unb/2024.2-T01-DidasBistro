import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-title"><strong>Didas </strong>Bistro</h1>
      <nav className="header-nav">
        <a className="nav-link" href="/estoque">
          Estoque
        </a>
        <Link to={"/evento"} className="nav-link" >
          Eventos
        </Link>
        <a className="nav-link" href="/funcionarios">
          Funcionarios
        </a>
      </nav>
    </header>
  );
};

export default Header;
