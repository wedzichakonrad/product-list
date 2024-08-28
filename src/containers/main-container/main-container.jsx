import "./main-container.sass";
import Navigation from "../../components/navigation/navigation";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "../../utils/utils";
import HomePage from "../home-page/home-page";
import ProductsList from "../product-list/products-list";
import ProductDetails from "../product-details/product-details";

const MainContainer = () => {
	return (
		<div className="main-container">
			<Navigation />
			<div className="main-container__content">
				<Routes>
					<Route path={routePaths.homePage.path} element={<HomePage />} />
					<Route
						path={routePaths.productList.path}
						element={<ProductsList />}
					/>
					<Route
						path={routePaths.productDetails.path}
						element={<ProductDetails />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default MainContainer;
