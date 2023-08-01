import "./SearchBar.css";
import React, { useState } from "react";
import Productos from "../Repositories/Productos";

const SearchBar = () => {
  const [filtro, setFiltro] = useState("");

  const handleInputChange = (event) => {
    setFiltro(event.target.value);
  };

  const productosFiltrados = filtro
    ? Productos.filter((producto) => {
        const terminoBusqueda = filtro.trim().toLowerCase();
        return (
          producto.nombre.toLowerCase().includes(terminoBusqueda) ||
          producto.descripcion.toLowerCase().includes(terminoBusqueda)
        );
      })
    : [];

  return (
    <div className="container">
      <input
        className="search-input"
        type="text"
        placeholder="Buscar producto..."
        value={filtro}
        onChange={handleInputChange}
      />
      {filtro && (
        <div className="resultados">
          <ul>
            {productosFiltrados.map((producto) => (
              <li key={producto.nombre}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


