import { useEffect } from "react";
import "./home-page.sass";
import { getProducts } from "../../api/get-products";
import { useState } from "react";
import Loader from "../../components/loader/loader";
import ProductListElement from "../../components/product-list-element/product-list-element";

const recommendedProductsLimit = 5;

const HomePage = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [recommendedProductsList, setRecommendedProductsList] = useState([]);

	useEffect(() => {
		getProducts({
			setData: setRecommendedProductsList,
			setIsFetching,
			limit: recommendedProductsLimit,
		});
	}, []);

	return (
		<div className="home-page">
			<h1 className="home-page__welcome-message">Welcome to our store!</h1>
			<div className="home-page__products-redirect">
				<p>Click here, to see what we have to offer...</p>
				<button>Go to store</button>
			</div>
			{isFetching ? (
				<Loader />
			) : (
				<div className="home-page__recommendation">
					<p>We recommend</p>
					<ul className="home-page__recommendation-list">
						{recommendedProductsList.map((product, index) => (
							<ProductListElement
								key={`${product.id}_${index}`}
								title={product.title}
								price={product.price}
								image={product.image}
								id={product.id}
							/>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default HomePage;
