const baseUrl = "https://fakestoreapi.com/products";

const _fetchProducts = async ({ id, limit }) => {
	const url = `${baseUrl}${id ? `/${id}` : ""}${
		limit ? `?limit=${limit}` : ""
	}`;

	return await fetch(url)
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				return data;
			}
		})
		.catch((err) => console.log(err));
};

export const getProducts = async ({ setIsFetching, setData, id, limit }) => {
	setIsFetching(true);
	try {
		const data = await _fetchProducts({ id, limit });
		if (data) {
			setData(data);
		} else {
			throw new Error("No data received");
		}
	} catch (err) {
		throw new Error(`An error occured ${err}`);
	} finally {
		setIsFetching(false);
	}
};
