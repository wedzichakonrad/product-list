import "./previous-details-redirect.sass";
import { useNavigate } from "react-router";
import { routePaths } from "../../utils/utils";
import { cutProductTitle } from "../../helpers/helpers";

const PreviousDetailsRedirect = ({ previousProductDetails }) => {
	const navigate = useNavigate();

	const redirectToProductDetails = () => {
		navigate(routePaths.productDetails.createUrl(previousProductDetails.id));
	};

	return (
		<div
			onClick={redirectToProductDetails}
			className="previous-details-redirect"
		>
			<div className="previous-details-redirect__inner">
				<div className="previous-details-redirect__content">
					<p className="previous-details-redirect__question">
						Continue shopping?
					</p>
					<p className="previous-details-redirect__product-title">
						{cutProductTitle(previousProductDetails.title)}
					</p>
					<div className="previous-details-redirect__img-wrapper">
						<img
							src={previousProductDetails.image}
							alt={previousProductDetails.title}
						/>
					</div>
				</div>
				<div className="previous-details-redirect__line-break" />
				<div className="previous-details-redirect__arrow" />
			</div>
		</div>
	);
};

export default PreviousDetailsRedirect;
