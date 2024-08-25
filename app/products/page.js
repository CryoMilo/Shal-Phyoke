import { getProductList } from "@/services/product";
import Link from "next/link";

const Products = async () => {
	const data = await getProductList();

	const products = data;

	return (
		<div className="flex flex-col  gap-3">
			{products.map((item) => (
				<Link key={item._id} href={`/products/${item._id}`}>
					<button className="hover:text-yellow-400">{item.productName}</button>
				</Link>
			))}
		</div>
	);
};

export default Products;
