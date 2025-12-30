import React from 'react';
import './styles.css';

interface LivroMelhoresProps {
  title: string;
  author: string;
  description: string;
  book_image: string;
}

const LivroMelhores: React.FC<LivroMelhoresProps> = (props) => {
  let descricao = props.description;
  if (descricao === '') {
    descricao =
      'Conteúdo não disponibilizado pelo jornal The New York Times.';
  }

  return (
    <div className="melhoresContent">
      <div className="divMelhoresImagem">
        <img
          className="melhoresImagem"
          src={props.book_image}
          alt="Lista de livros do NYTimes"
        />
      </div>
      <div className="melhoresTexto">
        <h3 className="melhoresTitulo">{props.title}</h3>
        <p className="melhoresAutor">{props.author}</p>
        <p className="melhoresDescricao">{descricao}</p>
      </div>
    </div>
  );
};

export default LivroMelhores;

