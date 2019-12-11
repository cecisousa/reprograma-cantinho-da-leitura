import React from 'react';

const Input = ({ placeholder, tipo, getInputValue }) => {
    return (
        <input
            placeholder={placeholder}
            type={tipo}
            onChange={getInputValue}
        >
        </input>
    )
}

export default Input;
