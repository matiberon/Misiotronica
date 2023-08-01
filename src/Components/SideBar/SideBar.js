import React, { useState } from 'react';
import './SideBar.css';
import LogoSideBar from '../../assets/LogoSideBar.png';

const SideBar = () => {
    return (
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/about">Sobre nosotros</a>
            </li>
            <li>
              <a href="/shop">Tienda</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
        <img src={LogoSideBar} alt="Logo" className="logo" />
      </div>
      <p>MISIOTRONICA</p>
      </div>
    );
  };
  
  export default SideBar;