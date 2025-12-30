import axios from 'axios';

const config = {
  baseURL: 'https://api.nytimes.com/svc/books/v3/',
  timeout: 1000,
};

const protocolo = axios.create(config);

export function getMelhores() {
  const url =
    'lists/overview.json?api-key=NtEGlE5TW9iOnmlh2YOvE3ySO7DXEXSDYfLSU04w0PgVmf4Q';
  return protocolo.get(url);
}

export function getAutores(nomeAutor: string) {
  const url = `reviews.json?author=${nomeAutor}&api-key=NtEGlE5TW9iOnmlh2YOvE3ySO7DXEXSDYfLSU04w0PgVmf4Q`;
  return protocolo.get(url);
}

