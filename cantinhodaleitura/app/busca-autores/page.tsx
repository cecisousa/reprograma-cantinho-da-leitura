'use client';

import React, { useState } from 'react';
import { getAutores } from '@/service/nytimes';
import Input from './components/Input';
import LivroAutores from './components/LivroAutores';
import Button from '@/components/Button';
import Header from '@/components/Header';
import './styles.css';

interface Review {
  book_title: string;
  book_author: string;
  publication_dt: string;
  url: string;
}

const Autores: React.FC = () => {
  const [value, setValue] = useState('');
  const [autores, setAutores] = useState<Review[]>([]);
  const [pesquisado, setPesquisado] = useState(false);

  const handleChange = (param: React.ChangeEvent<HTMLInputElement>) => {
    setValue(param.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setValue('');
    setTimeout(() => {
      setPesquisado(true);
    }, 1000);
  };

  const handleSearch = () => {
    getAutores(value)
      .then((response) => {
        setAutores(response.data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header titulo="Busque seus autores favoritos" classe="autores-header" />
      <div className="container autores">
        <div className="divAutores">
          <p className="textoIntro">
            Aqui você pode pesquisar por um autor ou autora e ler as resenhas
            publicadas pelo jornal{' '}
            <span className="nomeSite">The New York Times</span> a respeito dos
            seus livros.
          </p>
        </div>
        <div className="divSearch">
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Pesquise o nome de um autor ou autora"
              tipo="text"
              getInputValue={handleChange}
              value={value}
            />
            <div className="divBtn">
              <Button funcao={handleSearch}>Pesquisar</Button>
            </div>
          </form>
        </div>
        <div>
          {autores.length > 0 ? (
            autores.map((item, index) => {
              return <LivroAutores key={index} {...item} />;
            })
          ) : pesquisado ? (
            <div className="divLoading">
              <span className="loading">Nenhum resultado encontrado...</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default Autores;

