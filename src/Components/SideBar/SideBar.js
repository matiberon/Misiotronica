import React, { useState } from 'react';
import './SideBar.css';

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
              <a href="/storage">Tienda</a>
            </li>
            <li>
              <a href="/contact">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default SideBar;