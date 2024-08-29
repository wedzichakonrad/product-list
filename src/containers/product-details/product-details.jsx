import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./product-details.sass";
import Loader from "../../components/loader/loader";
import { extractIdFromPath, formatPrice } from "../../helpers/helpers";
import { getProducts } from "../../api/get-products";
import ImagePreview from "../../components/image-preview/image-preview";
import Overlay from "../../components/overlay/overlay";

const ProductDetails = ({ setProductDetails, productDetails }) => {
	const location = useLocation();
	const [isFetching, setIsFetching] = useState(true);
	const [isImagePreviewOpened, setIsImagePreviewOpened] = useState(false);
	const productId = extractIdFromPath(location.pathname);

	useEffect(() => {
		getProducts({
			setIsFetching,
			setData: setProductDetails,
			id: productId,
		});
	}, []);

	console.log(productDetails);

	const openImagePreview = () => {
		setIsImagePreviewOpened(true);
	};

	return (
		<div className="product-details">
			{isFetching ? (
				<Loader />
			) : (
				<>
					<div className="product-details__top-inner">
						<div
							className="product-details__img-wrapper"
							onClick={openImagePreview}
						>
							<img src={productDetails.image} alt={productDetails.title} />
							<Overlay text={"Preview"} />
						</div>
						<div className="product-details__details-wrapper">
							<h1 className="product-details__title">{productDetails.title}</h1>
							<div className="product-details__rating">
								<span className="product-details__rating-rate">
									{productDetails.rating.rate} / 5
								</span>
								<span className="product-details__rating-count">
									({productDetails.rating.count})
								</span>
							</div>
							<div className="product-details__category">
								<span>Category: </span>
								{productDetails.category}
							</div>
							<span className="product-details__price">
								{formatPrice(productDetails.price)} $
							</span>
							<button className="product-details__buy-button">Buy</button>
						</div>
					</div>
					<div className="product-details__bottom-inner">
						<h2 className="product-details__description-header">
							Product Description
						</h2>
						<p className="product-details__description">
							{productDetails.description}
						</p>
					</div>
					{isImagePreviewOpened && (
						<ImagePreview
							imageDetails={{
								src: productDetails.image,
								title: productDetails.title,
							}}
							setIsImagePreviewOpen={setIsImagePreviewOpened}
						/>
					)}
				</>
			)}
		</div>
	);
};

export default ProductDetails;
