import React from 'react';
import Button from '../../Common/Button'
import './Home.css';

const Home = () => {
    return (
        <div className = "home">
            <h1>Los mejores materiales eléctricos directo a tu casa.</h1>
            <Button to="/Shop" label="Ver productos" />
            <p>✓ Hacemos entregas a todo el país</p>
            <p>✓ Comprá sin mínimos de compra</p> 
            <p>✓ Pagá seguro con MercadoPago</p> 
            <p>✓ Hacemos factura A</p>

        </div>
    );
};

export default Home;