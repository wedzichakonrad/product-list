import "./sort-bar.sass";

const SORT_TYPES = {
	DEFAULT: "default",
	TITLE: "title",
	PRICE: "price",
};

const sortOptions = [
	{
		name: "Default",
		value: SORT_TYPES.DEFAULT,
	},
	{
		name: "Title",
		value: SORT_TYPES.TITLE,
	},
	{
		name: "Price",
		value: SORT_TYPES.PRICE,
	},
];

const sortProducts = (a, b, sortProperty) => {
	if (a[sortProperty] > b[sortProperty]) {
		return 1;
	}

	if (a[sortProperty] < b[sortProperty]) {
		return -1;
	}

	return 0;
};

const SortBar = ({ setProductsList, getProductsList }) => {
	const onSortChange = (e) => {
		const sortValue = e.target.value;

		if (sortValue === SORT_TYPES.DEFAULT) {
			getProductsList();
			return;
		}

		setProductsList((cl) => {
			const sortedList = [...cl].sort((a, b) => sortProducts(a, b, sortValue));
			return sortedList;
		});
	};

	return (
		<div className="sort-bar">
			<div>
				<span>Sort by:</span>
			</div>
			<select onChange={onSortChange}>
				{sortOptions.map((option, index) => {
					return (
						<option key={`${option.value}-${index}`} value={option.value}>
							{option.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SortBar;
