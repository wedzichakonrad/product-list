import "./image-preview.sass";

const ImagePreview = ({ imageDetails, setIsImagePreviewOpen }) => {
	return (
		<div className="image-preview">
			<div className="image-preview__img-wrapper">
				<img src={imageDetails.src} alt={imageDetails.title} />
			</div>
			<div className="image-preview__close-button">
				<button onClick={() => setIsImagePreviewOpen(false)} />
			</div>
			<div className="image-preview__backdrop" />
		</div>
	);
};

export default ImagePreview;
