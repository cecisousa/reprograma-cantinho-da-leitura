import React from 'react';
import Livros from '../../../../assets/img/page02-lateral.jpg'
import './styles.css'

const Intro = () => {
    return (
        <div className="intro">
            <div className="divIntro">
                <p className="textoIntro">O hábito de ler livros tem o poder de nos fazer muito bem! Tanto para quem busca uma forma de entretenimento quanto para quem quer adquirir novos conhecimentos, a leitura é uma das alternativas mais simples e democráticas.</p>
                <p className="textoIntro">Mesmo assim, a população mundial tem deixado esse costume de lado — seja por falta de tempo, preguiça, falta de costume... O site <span className="nomeSite">Cantinho da Leitura</span> tem como missão de incentivar as pessoas a desenvolverem o hábito de ler cada vez mais livros.</p>
            </div>

            <img className="imagemIntro" src={Livros} alt="Pilha de livros sobre a mesa" />
        </div>
    )
}

export default Intro;
