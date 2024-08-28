import Image from "next/image";

export const Navbar = () => {
	return (
		<nav>
			<Image
				src="/images/main-logo.jpg"
				alt="Main Logo"
				width={70}
				height={70}
				className="p-10"
			/>
		</nav>
	);
};
