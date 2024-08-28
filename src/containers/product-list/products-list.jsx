import { useEffect, useState } from "react";
import "./products-list.sass";
import { getProducts } from "../../api/get-products";
import Loader from "../../components/loader/loader";
import ProductListElement from "../../components/product-list-element/product-list-element";
import FilterBar from "../../components/filter-bar/filter-bar";

const ProductsList = () => {
	const [productsList, setProductsList] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		getProducts({ setData: setProductsList, setIsFetching });
	}, []);

	console.log(productsList);
	return (
		<div className="products-list">
			<FilterBar />
			<header>Products</header>
			{isFetching ? (
				<Loader />
			) : (
				<ul>
					{productsList?.map((product, index) => (
						<ProductListElement
							key={`${product.id}_${index}`}
							title={product.title}
							price={product.price}
							image={product.image}
							id={product.id}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default ProductsList;
