
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className='navbar'>
        <Link to="/" className="logo">CN::React</Link>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/contatos" >Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
