"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import Link from "next/link";
import "./styles.css";

const Menu: React.FC = () => {
	const [open, setOpen] = useState(false);

	const handleOpenClose = () => {
		setOpen((prevState) => !prevState);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleOpenClose();
		}
	};

	const handleLinkClick = () => {
		setOpen(false);
	};

	let classeDasOpcoes = "navbar-menu__opcoes";
	let classeDoBotao = "navbar-menu__botao";

	if (open) {
		classeDasOpcoes += " navbar-menu__opcoes--aberto";
		classeDoBotao += " navbar-menu__botao--aberto";
	}

	return (
		<div className="nav-menu navbar-links">
			<button
				className={classeDoBotao}
				onClick={handleOpenClose}
				onKeyDown={handleKeyDown}
				type="button"
			>
				Menu
			</button>
			<ul className={classeDasOpcoes}>
				<li>
					<Link
						href="/"
						className="navbar-links__ativo"
						onClick={handleLinkClick}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						href="/por-que-ler"
						className="navbar-links__ativo"
						onClick={handleLinkClick}
					>
						Por que ler?
					</Link>
				</li>
				<li>
					<Link
						href="/melhores-da-semana"
						className="navbar-links__ativo"
						onClick={handleLinkClick}
					>
						Os melhores
					</Link>
				</li>
				<li>
					<Link
						href="/busca-autores"
						className="navbar-links__ativo"
						onClick={handleLinkClick}
					>
						Autores
					</Link>
				</li>
				<li>
					<Link
						href="/dica-especial"
						className="navbar-links__ativo"
						onClick={handleLinkClick}
					>
						Dica especial
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
