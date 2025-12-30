import axios from "axios";

const booksApiConfig = {
	baseURL: "https://api.nytimes.com/svc/books/v3/",
	timeout: 5000,
};

const booksApi = axios.create(booksApiConfig);

const searchApiConfig = {
	baseURL: "https://api.nytimes.com/svc/search/v2/",
	timeout: 5000,
};

const searchApi = axios.create(searchApiConfig);

export function getMelhores() {
	const url =
		"lists/overview.json?api-key=NtEGlE5TW9iOnmlh2YOvE3ySO7DXEXSDYfLSU04w0PgVmf4Q";
	return booksApi.get(url);
}

const filter = "book";

export function getAutores(nomeAutor: string) {
	const url = `articlesearch.json?q=${nomeAutor}&fq=${filter}&api-key=NtEGlE5TW9iOnmlh2YOvE3ySO7DXEXSDYfLSU04w0PgVmf4Q`;
	return searchApi.get(url);
}
