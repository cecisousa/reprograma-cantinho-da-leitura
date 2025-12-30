import React from 'react';
import Image from 'next/image';
import Menu from './Menu';
import './styles.css';

const Nav: React.FC = () => {
  return (
    <nav className="navbar">
      <nav className="logo">
        <Image
          src="/logo.png"
          alt="Logotipo do site Cantinho da Leitura"
          className="navbar-logo"
          width={85}
          height={85}
        />
        <h2 className="texto-logo">Cantinho da Leitura</h2>
      </nav>
      <Menu />
    </nav>
  );
};

export default Nav;

