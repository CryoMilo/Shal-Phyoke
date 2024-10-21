import { getOneProduct } from "@/services/product";
import Image from "next/image";

export default async function Page({ params }) {
	const data = await getOneProduct(params.slug);

	const productData = data;

	return (
		<div>
			<div className="flex flex-col items-start p-3 md:p-20 lg:flex-row">
				<div className="w-50%">
					<Image
						src={productData.image}
						alt={productData.productName}
						width={400}
						height={400}
						className="p-10"
					/>
				</div>

				<section className="px-10 md:border-l-4 md:border-l-yellow-400">
					<div>
						<p className="text-2xl text-yellow-400">Name</p>
						<p>{productData.productName}</p>
					</div>
					<br />
					<div>
						<p className="text-2xl text-yellow-400">What Am I?</p>
						<p>{productData.description}</p>
					</div>
					<br />
					<div>
						<p className="text-2xl text-yellow-400">What I have in me?</p>
						<ol>
							{productData.ingredients.map((element) => (
								<li key={element.item}> - {element.item}</li>
							))}
						</ol>
					</div>
					<br />
					<div>
						<p className="text-2xl text-yellow-400">How I taste like?</p>
						<p>{productData.taste}</p>
					</div>
				</section>
			</div>
		</div>
	);
}
