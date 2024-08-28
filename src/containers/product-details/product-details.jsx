import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./product-details.sass";
import Loader from "../../components/loader/loader";
import { extractIdFromPath } from "../../helpers/helpers";
import { getProducts } from "../../api/get-products";

const ProductDetails = () => {
	const location = useLocation();
	const [productDetails, setProductDetails] = useState({});
	const [isFetching, setIsFetching] = useState(false);
	const productId = extractIdFromPath(location.pathname);

	useEffect(() => {
		getProducts({
			setIsFetching,
			setData: setProductDetails,
			id: productId,
		});
	}, []);

	return (
		<div className="product-details">
			{isFetching ? (
				<Loader />
			) : (
				<div className="product-details__inner">
					<div className="product-details__img-wrapper">
						<img src={productDetails.image} alt={productDetails.title} />
					</div>
					<div className="product-details__details-wrappe	r">
						<h1>{productDetails.title}</h1>
						<p>{productDetails.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
