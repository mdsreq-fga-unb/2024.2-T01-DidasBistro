import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"
import logo from "../../assets/didasico.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img 
            src={logo} 
            alt="Didas Bistro Logo" 
            className="logo" 
          />
        </Link>
      </div>
      <h1 className="header-title"><strong>Dida's </strong>Bistro</h1>
      <nav className="header-nav">
        <a className="nav-link" href="/estoque">
          Estoque
        </a>
        <Link to={"/evento"} className="nav-link" >
          Eventos
       </Link> 
      </nav>
    </header>
  );
};

export default Header;
