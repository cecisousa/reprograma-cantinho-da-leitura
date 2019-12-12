import React from 'react';
import './styles.css';

const Input = ({ placeholder, tipo, getInputValue, value }) => {
    return (
        <input
            className="campo"
            placeholder={placeholder}
            type={tipo}
            onChange={getInputValue}
            value={value}
        >
        </input>
    )
}

export default Input;
