import "./main-container.sass";
import { useState, useContext, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "../../utils/utils";
import Navigation from "../../components/navigation/navigation";
import HomePage from "../home-page/home-page";
import ProductsList from "../product-list/products-list";
import ProductDetails from "../product-details/product-details";
import Footer from "../../components/footer/footer";

export const ProductDetailsContext = createContext({});

const MainContainer = () => {
	const [productDetails, setProductDetails] = useState(null);

	return (
		<div className="main-container">
			<Navigation />
			<main className="main-container__content">
				<ProductDetailsContext.Provider
					value={{ productDetails, setProductDetails }}
				>
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
				</ProductDetailsContext.Provider>
			</main>
			<Footer />
		</div>
	);
};

export default MainContainer;
