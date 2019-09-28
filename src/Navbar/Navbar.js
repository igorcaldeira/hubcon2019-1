import React from 'react';
import logo from '../logo.svg';
import './Navbar.css'

const Navbar = () => <nav>
  <div className='container'>
    <div className='nav-logo'>
      <img src={logo} className="app-logo" alt="logo" />
    </div>
    <div>
      <ul>
        <li>
          <a href='#inicio' className='menu-link'>Início</a>
        </li>
        <li>
          <a href='#sobre' className='menu-link'>Sobre</a>
        </li>
        <li>
          <a href='#palestrantes' className='menu-link'>Palestrantes</a>
        </li>
        <li>
          <a href='#informacoes' className='menu-link'>Informações</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

export default Navbar;