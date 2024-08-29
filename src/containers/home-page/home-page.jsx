import "./home-page.sass";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../utils/utils";
import PreviousDetailsRedirect from "../../components/previous-details-redirect/previous-details-redirect";

const HomePage = ({ previousProductDetails }) => {
	const navigate = useNavigate();

	const onGoToStoreButtonClick = () => {
		navigate(routePaths.productList.path);
	};

	return (
		<div className="home-page">
			<h1 className="home-page__welcome-message">Welcome to our store!</h1>
			<div className="home-page__products-redirect">
				<p>Click below to see what we have to offer...</p>
				<button onClick={onGoToStoreButtonClick}>Go to store</button>
			</div>
			{previousProductDetails && (
				<PreviousDetailsRedirect
					previousProductDetails={previousProductDetails}
				/>
			)}
		</div>
	);
};

export default HomePage;
