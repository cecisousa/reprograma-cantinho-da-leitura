import React from "react";
import "./styles.css";

interface HeaderProps {
	classe: string;
	titulo: string;
}

const Header: React.FC<HeaderProps> = ({ classe, titulo }) => {
	return (
		<section className={classe}>
			<h1>{titulo}</h1>
		</section>
	);
};

export default Header;
