import Image from "next/image";
import "./styles.css";

interface LivroMelhoresProps {
	title: string;
	author: string;
	description: string;
	book_image: string;
}

const LivroMelhores = (props: LivroMelhoresProps) => {
	let descricao = props.description;
	if (descricao === "") {
		descricao = "Conteúdo não disponibilizado pelo jornal The New York Times.";
	}

	// Truncate description if too long
	const maxLength = 250;
	const truncatedDesc =
		descricao.length > maxLength
			? `${descricao.substring(0, maxLength)}...`
			: descricao;

	return (
		<div className="livro-card">
			<div className="livro-image-wrapper">
				<Image
					className="livro-image"
					src={props.book_image}
					alt={`Capa do livro ${props.title}`}
					width={180}
					height={270}
				/>
			</div>
			<div className="livro-content">
				<div className="livro-header">
					<h3 className="livro-title">{props.title}</h3>
					<p className="livro-author">por {props.author}</p>
				</div>
				<p className="livro-description">{truncatedDesc}</p>
			</div>
		</div>
	);
};

export default LivroMelhores;
