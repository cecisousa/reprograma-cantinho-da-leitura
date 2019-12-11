import React from 'react';
import './styles.css';

const LivroAutores = (props) => {
    let dataAtual = props.publication_dt.split("-")
    let novaData = `${dataAtual[2]}/${dataAtual[1]}/${dataAtual[0]}`
    return (
        <div>
            <h3>{props.book_title}</h3>
            <p>{props.book_author}</p>
            <p>{novaData}</p>
            <a href={props.url} target="_blank" rel="noopener noreferrer">Ler a crítica</a>
        </div>
    );
}
export default LivroAutores;