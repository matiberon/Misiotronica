import React from 'react';
import './Storage.css';
import Card from '../../Card/Card';
import Productos from '../../Repositories/Productos';

const Storage = () => {
    return (
        <div className = "storage">
            <h1>Tienda online</h1>
            <div class="galeria">
                {Productos.map(function (elem) {
                    return (
                        <Card                        
                            nombre={elem.nombre}
                            imagen={elem.imagen}
                            descripcion={elem.descripcion}
                            precio={elem.precio}
                            />
                    )})
                }
            </div>
        </div>
    
    );
};

export default Storage;