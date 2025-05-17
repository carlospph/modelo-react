
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Content.css';

export default function Content() {
  return (
    <main>
      <Outlet />
      
      <ul className='links-internos'>
           <li>
            <Link to="/about" className='nav-link'>Sobre</Link>
          </li>
          <li>
            <Link to="/contatos" className='nav-link'>Contatos</Link>
          </li> 
      </ul>
    </main>
  );
}
