import "./overlay.sass";

const Overlay = ({ text }) => {
	return (
		<div className="overlay">
			<div className="overlay__inner">
				<span>{text}</span>
			</div>
		</div>
	);
};

export default Overlay;
