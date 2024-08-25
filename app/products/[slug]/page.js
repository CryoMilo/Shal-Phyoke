import { getOneProduct } from "@/services/product";
import Image from "next/image";

export default async function Page({ params }) {
	const data = await getOneProduct(params.slug);

	const productData = data;

	const base64Image = Buffer.from(productData.image.data).toString("base64");
	const imageSrc = `data:${productData.contentType};base64,${base64Image}`;

	function csvToArray(csvString) {
		// Trim the string and split it by comma
		return csvString.split(",").map((item) => item.trim());
	}

	const ingredientArray = csvToArray(productData.ingredients);

	return (
		<div>
			<div className="flex flex-col items-start p-20 lg:flex-row">
				<Image
					src={imageSrc}
					alt={productData.productName}
					width={400}
					height={400}
					className="p-10"
				/>

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
							{ingredientArray.map((element) => (
								<li key={element}> - {element}</li>
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
