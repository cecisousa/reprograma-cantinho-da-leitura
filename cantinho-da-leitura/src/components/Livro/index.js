import React from 'react'
import './styles.css'

function Livro(props) {
  return (
    <div className='divContentDica'>
      <img className="imagemLivroDica" src={props.imagem} alt="Crédito da imagem: site da Amazon" />
      <div>
        <h3 className="tituloDica">{props.titulo}</h3>
        <p>{props.autor}</p>
      </div>
    </div>
  )
}

export default Livro;