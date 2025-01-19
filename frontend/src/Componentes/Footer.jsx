import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Dida's Bistro</p>
      <nav className="footer-nav">
        <a href="#estoque">Estoque</a>
        <a href="#eventos">Eventos</a>
        <a href="#funcionarios">Funcionários</a>
      </nav>
    </footer>
  );
};

export default Footer;
