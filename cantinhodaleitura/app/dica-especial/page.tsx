'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import LivroDica from './components/LivroDica';
import { getDicas } from '@/service/dicas';
import './styles.css';

interface Livro {
  imagem: string;
  titulo: string;
  autor: string;
}

const Dica: React.FC = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [imagem, setImagem] = useState('/random.png');
  const [titulo, setTitulo] = useState('Descubra o nome do seu próximo livro...');
  const [autor, setAutor] = useState('... e do próximo autor ou autora!');

  useEffect(() => {
    getDicas()
      .then((response) => {
        setLivros(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const numeroAleatorio = () => {
    let numero = Math.floor(Math.random() * livros.length);
    console.log(numero);
    setImagem(livros[numero].imagem);
    setTitulo(livros[numero].titulo);
    setAutor(livros[numero].autor);
  };

  return (
    <section>
      <Header classe="dicas-header" titulo="Quer uma dica de leitura?" />
      <div className="container">
        <div className="divDica">
          <p className="textoIntro">
            Está querendo ler um livro, mas não sabe qual escolher? Clique no
            botão abaixo para receber uma dica especial do{' '}
            <span className="nomeSite">Cantinho da Leitura</span>!
          </p>
        </div>
        <div className="divBotao">
          <Button funcao={numeroAleatorio}>Quero uma indicação!</Button>
        </div>
        <LivroDica titulo={titulo} autor={autor} imagem={imagem} />
      </div>
    </section>
  );
};

export default Dica;

