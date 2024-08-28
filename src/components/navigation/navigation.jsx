import { Link } from "react-router-dom";
import "./navigation.sass";
import { routePaths } from "../../utils/utils";

const Navigation = () => {
	return (
		<div className="navigation">
			<div className="navigation__title">
				<span>Company Name</span>
			</div>
			<nav>
				<ul>
					{Object.values(routePaths)
						.filter((route) => route.path !== routePaths.productDetails.path)
						.map((route) => (
							<li key={route.path} className="navigation__item">
								<Link to={route.path}>{route.title}</Link>
							</li>
						))}
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
