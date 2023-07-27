import React from 'react';
import Card from '../../Card/Card';
import Productos from '../../Repositories/Productos';

const Store = () => {
    return (
        <div className = "store">
            <h1>STORE</h1>
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

export default Store;