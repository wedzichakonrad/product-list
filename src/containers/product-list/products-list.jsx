import { useEffect, useState } from "react";
import "./products-list.sass";
import { getProducts } from "../../api/get-products";
import Loader from "../../components/loader/loader";
import ProductListElement from "../../components/product-list-element/product-list-element";
import SortBar from "../../components/sort-bar/sort-bar";

const ProductsList = () => {
	const [productsList, setProductsList] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	const getProductsList = () =>
		getProducts({ setData: setProductsList, setIsFetching });

	useEffect(() => {
		getProductsList();
	}, []);

	return (
		<div className="products-list">
			<div className="products-list__top-bar">
				<span className="products-list__header">Products</span>
				<SortBar
					setProductsList={setProductsList}
					getProductsList={getProductsList}
				/>
			</div>
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
							liStyle={{ opacity: 0, animationDelay: `${(index + 1) * 50}ms` }}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default ProductsList;
