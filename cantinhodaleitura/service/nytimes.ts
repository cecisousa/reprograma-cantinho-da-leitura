import axios from "axios";

const booksApiConfig = {
	baseURL: "https://api.nytimes.com/svc/books/v3/",
	timeout: 1000,
};

const booksApi = axios.create(booksApiConfig);

const searchApiConfig = {
	baseURL: "https://api.nytimes.com/svc/search/v2/",
	timeout: 1000,
};

const searchApi = axios.create(searchApiConfig);

export function getMelhores() {
	const url =
		"lists/overview.json?api-key=NtEGlE5TW9iOnmlh2YOvE3ySO7DXEXSDYfLSU04w0PgVmf4Q";
	return booksApi.get(url);
}

export function getAutores(nomeAutor: string) {
	const url = `articlesearch.json?q=${nomeAutor}&api-key=NtEGlE5TW9iOnmlh2YOvE3ySO7DXEXSDYfLSU04w0PgVmf4Q`;
	return searchApi.get(url);
}
