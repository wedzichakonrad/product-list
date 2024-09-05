import "./main-container.sass";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "../../utils/utils";
import Navigation from "../../components/navigation/navigation";
import HomePage from "../home-page/home-page";
import ProductsList from "../product-list/products-list";
import ProductDetails from "../product-details/product-details";
import Footer from "../../components/footer/footer";
import {ProductDetailsProvider} from "../../providers/product-details-provider";

const MainContainer = () => {
	return (
		<div className="main-container">
			<Navigation />
			<main className="main-container__content">
				<ProductDetailsProvider>
					<Routes>
						<Route path={routePaths.homePage.path} element={<HomePage />} />
						<Route
							path={routePaths.productDetails.path}
							element={<ProductDetails />}
						/>
						<Route
							path={routePaths.productList.path}
							element={<ProductsList />}
						/>
					</Routes>
				</ProductDetailsProvider>
			</main>
			<Footer />
		</div>
	);
};

export default MainContainer;
