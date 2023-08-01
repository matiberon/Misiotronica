import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ to, label }) => {
    return (
        <Link to = { to }>
            <button>{label}</button>
        </Link>
    );
};

export default Button;