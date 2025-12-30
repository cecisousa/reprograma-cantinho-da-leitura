import React from 'react';
import './styles.css';

interface ButtonProps {
  funcao?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ funcao, children }) => {
  return (
    <button className="button" onClick={funcao}>
      {children}
    </button>
  );
};

export default Button;

