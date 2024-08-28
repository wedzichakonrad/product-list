export const routePaths = {
	homePage: {
		path: "/",
		title: "Home",
	},
	productList: {
		path: "/products",
		title: "Products",
	},
	productDetails: {
		path: "/products/:id/details",
		title: "Product details",
		createUrl: (id) => `/products/${id}/details`,
	},
};
