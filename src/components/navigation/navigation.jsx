import { Link } from "react-router-dom";
import "./navigation.sass";
import { routePaths } from "../../utils/utils";
import MenuButton from "../menu-button/menu-button";
import { useState } from "react";

const Navigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="navigation">
			<div className="navigation__inner">
				<div className="navigation__title">
					<span>Company Name</span>
				</div>
				<MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
				<nav
					className={`navigation__nav ${
						isMenuOpen ? "navigation__nav--active" : ""
					}`}
				>
					<ul>
						{Object.values(routePaths)
							.filter((route) => route.path !== routePaths.productDetails.path)
							.map((route) => (
								<li
									key={route.path}
									className="navigation__item"
									onClick={() => setIsMenuOpen(false)}
								>
									<Link to={route.path}>{route.title}</Link>
								</li>
							))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
