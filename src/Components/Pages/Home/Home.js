import React from 'react';
import Button from '../../Common/Button'
import Slider from '../../Common/Slider';
import './Home.css';

const Home = () => {
    return (
        <div className = "home">
            <div className="texto">
            <h1>Los mejores materiales eléctricos directo a tu casa.</h1>
            <p>✓ Hacemos entregas a todo el país</p>
            <p>✓ Comprá sin mínimos de compra</p> 
            <p>✓ Pagá seguro con MercadoPago</p> 
            <p>✓ Hacemos factura A</p>
            </div>           
            <div className="slider">
            <Slider />
            </div>
            <div className="botonShop">
            <Button to="/Shop" label="Ver productos" />
            </div>           
        </div>
    );
};

export default Home;