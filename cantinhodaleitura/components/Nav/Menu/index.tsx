'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './styles.css';

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen((prevState) => !prevState);
  };

  let classeDasOpcoes = 'navbar-menu__opcoes';
  let classeDoBotao = 'navbar-menu__botao';

  if (open) {
    classeDasOpcoes += ' navbar-menu__opcoes--aberto';
    classeDoBotao += ' navbar-menu__botao--aberto';
  }

  return (
    <div className="nav-menu navbar-links">
      <span className={classeDoBotao} onClick={handleOpenClose}>
        Menu
      </span>
      <ul className={classeDasOpcoes}>
        <li>
          <Link href="/" className="navbar-links__ativo">
            Home
          </Link>
        </li>
        <li>
          <Link href="/por-que-ler" className="navbar-links__ativo">
            Por que ler?
          </Link>
        </li>
        <li>
          <Link href="/melhores-da-semana" className="navbar-links__ativo">
            Os melhores
          </Link>
        </li>
        <li>
          <Link href="/busca-autores" className="navbar-links__ativo">
            Autores
          </Link>
        </li>
        <li>
          <Link href="/dica-especial" className="navbar-links__ativo">
            Dica especial
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

