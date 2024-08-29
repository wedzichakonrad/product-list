import "./menu-button.sass";

const MenuButton = ({ isMenuOpen, setIsMenuOpen }) => {
	const definedMenuButtonLinesClass = isMenuOpen
		? "menu-button__line--active"
		: "";

	return (
		<button
			className="menu-button"
			onClick={() => setIsMenuOpen((state) => !state)}
		>
			<div
				className={`menu-button__inner ${
					isMenuOpen ? "menu-button__inner--active" : ""
				}`}
			>
				<div className={`menu-button__line ${definedMenuButtonLinesClass}`} />
				<div className={`menu-button__line ${definedMenuButtonLinesClass}`} />
				<div className={`menu-button__line ${definedMenuButtonLinesClass}`} />
			</div>
		</button>
	);
};

export default MenuButton;
