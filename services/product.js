import { TAG_PRODUCTS } from "./tags";

const url = `${process.env.NEXT_PUBLIC_NODE_SKIPTA_BACKEND_URL}/product`;

export const getProductList = async () => {
	const res = await fetch(url, {
		next: { tags: [TAG_PRODUCTS] },
		credentials: "include",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const getOneProduct = async (slug) => {
	const res = await fetch(`${url}/${slug}`, {
		next: { tags: [TAG_PRODUCTS] },
		credentials: "include",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

export const createProduct = async (productData) => {
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(productData),
		next: { tags: [TAG_PRODUCTS] },
	};

	const res = await fetch(url, requestOptions);

	if (!res.ok) {
		throw new Error("Failed to create order");
	}

	return res.json();
};
