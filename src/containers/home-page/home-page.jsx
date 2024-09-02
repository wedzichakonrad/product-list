import "./home-page.sass";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../utils/utils";
import PreviousDetailsRedirect from "../../components/previous-details-redirect/previous-details-redirect";
import { ProductDetailsContext } from "../main-container/main-container";

const HomePage = () => {
	const navigate = useNavigate();
	const { productDetails } = useContext(ProductDetailsContext);

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
			{productDetails && (
				<PreviousDetailsRedirect previousProductDetails={productDetails} />
			)}
		</div>
	);
};

export default HomePage;
