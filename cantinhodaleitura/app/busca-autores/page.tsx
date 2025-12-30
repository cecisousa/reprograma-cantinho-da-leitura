"use client";

import { useState } from "react";
import { getAutores } from "@/service/nytimes";
import Input from "./components/Input";
import LivroAutores from "./components/LivroAutores";
import Button from "@/components/Button";
import Header from "@/components/Header";
import "./styles.css";

interface Review {
	book_title: string;
	book_author: string;
	publication_dt: string;
	url: string;
}

interface Article {
	headline?: {
		main?: string;
	};
	byline?: {
		original?: string;
	};
	pub_date?: string;
	web_url?: string;
	// Fallback fields if structure is different
	book_title?: string;
	book_author?: string;
	publication_dt?: string;
	url?: string;
}

const Autores: React.FC = () => {
	const [value, setValue] = useState("");
	const [autores, setAutores] = useState<Review[]>([]);
	const [pesquisado, setPesquisado] = useState(false);

	// Transform Article Search API response to Review format
	const transformArticleToReview = (article: Article): Review | null => {
		// Check if it's already in Review format (from Books API)
		if (
			article.book_title &&
			article.book_author &&
			article.publication_dt &&
			article.url
		) {
			return {
				book_title: article.book_title,
				book_author: article.book_author,
				publication_dt: article.publication_dt,
				url: article.url,
			};
		}

		// Transform from Article Search API format
		if (article.headline?.main && article.web_url) {
			return {
				book_title: article.headline.main,
				book_author: article.byline?.original || "Autor desconhecido",
				publication_dt:
					article.pub_date || new Date().toISOString().split("T")[0],
				url: article.web_url,
			};
		}

		return null;
	};

	const handleChange = (param: React.ChangeEvent<HTMLInputElement>) => {
		setValue(param.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		setValue("");
		setTimeout(() => {
			setPesquisado(true);
		}, 1000);
	};

	const handleSearch = () => {
		setPesquisado(false);
		getAutores(value)
			.then((response) => {
				// Article Search API returns data in response.data.response.docs
				const articles: Article[] =
					response.data?.response?.docs || response.data?.results || [];
				const reviews = articles
					.map(transformArticleToReview)
					.filter((review): review is Review => review !== null);
				setAutores(reviews);
				setPesquisado(true);
			})
			.catch((err) => {
				console.log(err);
				setAutores([]);
				setPesquisado(true);
			});
	};

	return (
		<>
			<Header titulo="Busque seus autores favoritos" classe="autores-header" />
			<div className="container autores">
				<div className="divAutores">
					<p className="textoIntro">
						Aqui você pode pesquisar por um autor ou autora e ler as resenhas
						publicadas pelo jornal{" "}
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
					{autores && autores.length > 0 ? (
						autores.map((item) => {
							return (
								<LivroAutores
									key={`${item.book_title}-${item.url}`}
									{...item}
								/>
							);
						})
					) : pesquisado ? (
						<div className="divLoading">
							<span className="loading">Nenhum resultado encontrado...</span>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
};

export default Autores;
