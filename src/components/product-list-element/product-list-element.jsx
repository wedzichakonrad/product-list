import { routePaths } from "../../utils/utils";
import "./product-list-element.sass";
import { useNavigate } from "react-router-dom";
import { cutProductTitle } from "../../helpers/helpers";

const ProductListElement = ({ title, image, price, id }) => {
	const navigate = useNavigate();

	const redirectToProductDetails = () => {
		navigate(routePaths.productDetails.createUrl(id));
	};

	return (
		<li onClick={redirectToProductDetails} className="product-list-element">
			<div className="product-list-element__img-wrapper">
				<img src={image} alt={title} />
			</div>
			<div className="product-list-element__details-wrapper">
				<p className="product-list-element__title">{cutProductTitle(title)}</p>
				<div className="product-list-element__price">{price} $</div>
			</div>
			<div className="product-list-element__go-to-details">
				<div>
					<span>Details</span>
				</div>
			</div>
		</li>
	);
};

export default ProductListElement;
