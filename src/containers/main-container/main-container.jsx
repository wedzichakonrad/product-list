import "./main-container.sass";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "../../utils/utils";
import Navigation from "../../components/navigation/navigation";
import HomePage from "../home-page/home-page";
import ProductsList from "../product-list/products-list";
import ProductDetails from "../product-details/product-details";
import Footer from "../../components/footer/footer";

const MainContainer = () => {
	const [productDetails, setProductDetails] = useState(null);

	return (
		<div className="main-container">
			<Navigation />
			<main className="main-container__content">
				<Routes>
					<Route
						path={routePaths.homePage.path}
						element={<HomePage previousProductDetails={productDetails} />}
					/>
					<Route
						path={routePaths.productList.path}
						element={<ProductsList />}
					/>
					<Route
						path={routePaths.productDetails.path}
						element={
							<ProductDetails
								productDetails={productDetails}
								setProductDetails={setProductDetails}
							/>
						}
					/>
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default MainContainer;
