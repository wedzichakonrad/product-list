import { routePaths } from "../../utils/utils";
import "./product-list-element.sass";
import { useNavigate } from "react-router-dom";
import { cutProductTitle, formatPrice } from "../../helpers/helpers";
import Overlay from "../overlay/overlay";

const ProductListElement = ({ title, image, price, id, liStyle }) => {
	const navigate = useNavigate();

	const redirectToProductDetails = () => {
		navigate(routePaths.productDetails.createUrl(id));
	};

	return (
		<li
			style={liStyle}
			onClick={redirectToProductDetails}
			className="product-list-element"
		>
			<div className="product-list-element__inner">
				<div className="product-list-element__img-wrapper">
					<img src={image} alt={title} />
				</div>
				<div className="product-list-element__details-wrapper">
					<p className="product-list-element__title">
						{cutProductTitle(title)}
					</p>
					<div className="product-list-element__price">
						{formatPrice(price)} $
					</div>
				</div>
				<Overlay text={"Details"} />
			</div>
		</li>
	);
};

export default ProductListElement;
