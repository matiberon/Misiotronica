import React, { useState } from 'react';
import Productos from '../Repositories/Productos';
import './Slider.css'

const Slider = () => {
    const [productoActualIndex, setProductoActualIndex] = useState(0);
  
    const productoAnterior = () => {
      setProductoActualIndex((prevIndex) =>
        prevIndex === 0 ? Productos.length - 1 : prevIndex - 1
      );
    };
  
    const productoSiguiente = () => {
      setProductoActualIndex((prevIndex) =>
        prevIndex === Productos.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const productoActual = Productos[productoActualIndex];
  
    return (
      <div className="slider">
        <div className="fila1">
          <h2>{productoActual.nombre}</h2>
        </div>
        <div className="fila2">
          <div><button onClick={productoAnterior}>﹤</button></div>
          <img src={productoActual.imagen} alt={productoActual.nombre} /> 
          <div><button onClick={productoSiguiente}>﹥</button></div>
        </div>
        <div className="fila3">
          <p className='precio'>{productoActual.precio}</p>
        </div>
      </div>
    );  
  };
  
  export default Slider;