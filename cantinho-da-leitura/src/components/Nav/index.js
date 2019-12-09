import React from 'react';
import Menu from './Menu';
import Logo from '../../assets/img/logo.png';
import './styles.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <img
                src={Logo}
                alt="Logotipo do site Cantinho da Leitura"
                className="navbar-logo"
            />
            <Menu />
        </nav>
    )
}

export default Nav;