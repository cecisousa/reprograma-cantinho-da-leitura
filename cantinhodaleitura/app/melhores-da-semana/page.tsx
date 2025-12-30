"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import LivroMelhores from "./components/LivroMelhores";
import Intro from "@/components/Intro";
import { getMelhores } from "@/service/nytimes";
import "./styles.css";

interface List {
	list_id: number;
	display_name: string;
	books: Book[];
}

interface Book {
	primary_isbn13: string;
	title: string;
	author: string;
	description: string;
	book_image: string;
}

const Melhores: React.FC = () => {
	const [livros, setLivros] = useState<List[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		getMelhores()
			.then((response) => {
				console.log("API Response:", response.data);
				const lists = response.data?.results?.lists || [];
				setLivros(lists);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching books:", error);
				setError(
					"Erro ao carregar a lista de livros. Tente novamente mais tarde.",
				);
				setLoading(false);
				setLivros([]);
			});
	}, []);

	return (
		<>
			<Header titulo="Os melhores livros da semana" classe="melhores-header" />
			<section className="container melhores">
				<Intro
					imagem="/nyt.jpg"
					alt="Capa do jornal impresso The New York Times"
					paragrafo1={[
						"O jornal ",
						<span key="indicadorMelhores" className="nomeSite">
							The New York Times
						</span>,
						" é uma publicação norte-americana que circula diariamente desde 1851. Considerada uma referência no mundo do jornalismo, a publicação traz semanalmente uma lista dos livros que mais foram vendidos nos Estados Unidos.",
					]}
					paragrafo2='Esses "best-sellers" são originalmente agrupados em diversas categorias e, aqui, você tem acesso à lista completa: confira quais foram os 90 livros mais populares na última semana!'
				/>
				<div>
					{loading ? (
						<div className="divLoading">
							<span className="loading">Carregando a lista de livros...</span>
						</div>
					) : error ? (
						<div className="divLoading">
							<span className="loading">{error}</span>
						</div>
					) : livros.length > 0 ? (
						livros.map((lista) => {
							return (
								<div key={lista.list_id}>
									<span key="nomeLista" className="nomeLista">
										<h2>{lista.display_name}</h2>
									</span>
									<div>
										{lista.books.map((livro) => (
											<div key={livro.primary_isbn13}>
												<LivroMelhores {...livro} />
											</div>
										))}
									</div>
								</div>
							);
						})
					) : (
						<div className="divLoading">
							<span className="loading">Nenhum livro encontrado.</span>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Melhores;
