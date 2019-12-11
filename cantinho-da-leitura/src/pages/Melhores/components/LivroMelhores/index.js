import React from 'react';

const LivroMelhores = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.author}</p>
            <p>{props.description}</p>
            <img src={props.book_image} alt="Lista de livros do NYTimes" />
        </div>
    )
}

export default LivroMelhores;