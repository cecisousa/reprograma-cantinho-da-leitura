import React from 'react';
import './styles.css';

interface BoxProps {
  src: string;
  alt: string;
  titulo: string;
  veiculo: string;
  descricao: string;
  link: string;
}

const Box: React.FC<BoxProps> = ({
  src,
  alt,
  titulo,
  veiculo,
  descricao,
  link,
}) => {
  return (
    <div className="box">
      <div className="divImagemBox">
        <img className="imagemBox" src={src} alt={alt} />
      </div>
      <div className="content">
        <h3 className="tituloManchete">{titulo}</h3>
        <p className="nomeVeiculo">{veiculo}</p>
        <p className="descricaoNoticia">{descricao}</p>
        <a
          className="botaoNoticia"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia mais!
        </a>
      </div>
    </div>
  );
};

export default Box;

