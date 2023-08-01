import React from 'react';
import './Shop.css';
import Card from '../../Card/Card';
import Productos from '../../Repositories/Productos';

const Shop = () => {
    return (
        <div className = "shop">
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

export default Shop;