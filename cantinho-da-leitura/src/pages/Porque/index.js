import React from 'react';
import Header from '../../components/Header'
import Quote from './components/Quote';
import Lista from './components/Lista';
import Dados from './components/Dados';
import Intro from './components/Intro';
import './styles.css'

const Porque = () => {
    return (
        <section>
            <Header
                classe="porque-header"
                titulo="Por que ler nos dias de hoje?"
            />
            <div className="container">
                <Intro/>
                <Quote />
                <Lista />
                <Dados />
                <hr/>
            </div>
        </section>
    )
}

export default Porque;
