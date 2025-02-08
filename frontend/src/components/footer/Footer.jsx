import React from "react";
import "./Footer.css";
import { useNavigate, Link } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <p className="footer-title">Dida's Bistro</p>
      <nav className="footer-nav">
        <Link to="/">Estoque</Link>
        <Link to="/evento">Eventos</Link>
      </nav>
    </footer>
  );
};

export default Footer;