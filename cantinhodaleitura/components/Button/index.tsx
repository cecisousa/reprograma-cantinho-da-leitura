import React from 'react';
import './styles.css';

interface ButtonProps {
  funcao?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ funcao, children, disabled = false }) => {
  return (
    <button className="button" onClick={funcao} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;

