import React from 'react';

function Card(props) {
    return (
        <div className="Card">
            <h2>{props.nombre}</h2>
            <img src={props.imagen} alt={props.nombre} />           
            <p>{props.descripcion}</p>
            <h3>{props.precio}</h3>
        </div>
        
    );
};

export default Card;