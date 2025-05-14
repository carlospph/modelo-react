
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <nav>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/sobre" style={{ margin: '0 10px' }}>Sobre</Link>
        <Link to="/servicos" style={{ margin: '0 10px' }}>Serviços</Link>
        <Link to="/produtos" style={{ margin: '0 10px' }}>Produtos</Link>
      </nav>
    </header>
  );
}
