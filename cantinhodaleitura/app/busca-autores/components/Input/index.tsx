import React from 'react';
import './styles.css';

interface InputProps {
  placeholder: string;
  tipo: string;
  getInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  tipo,
  getInputValue,
  value,
}) => {
  return (
    <input
      className="campo"
      placeholder={placeholder}
      type={tipo}
      onChange={getInputValue}
      value={value}
    />
  );
};

export default Input;

