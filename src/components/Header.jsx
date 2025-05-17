
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>

      <div className="navbar-toools--container">
        
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contatos" >Contatos</Link>
       </nav>
    </header>
  );
}
