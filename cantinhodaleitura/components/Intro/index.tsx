import React from 'react';
import './styles.css';

interface IntroProps {
  imagem: string;
  alt: string;
  paragrafo1: string | React.ReactNode;
  paragrafo2: string | React.ReactNode;
}

const Intro: React.FC<IntroProps> = ({ imagem, alt, paragrafo1, paragrafo2 }) => {
  return (
    <div className="intro">
      <div className="divImagem">
        <img className="imagemIntro" src={imagem} alt={alt} />
      </div>
      <div className="divIntro">
        <p className="textoIntro">{paragrafo1}</p>
        <p className="textoIntro">{paragrafo2}</p>
      </div>
    </div>
  );
};

export default Intro;

