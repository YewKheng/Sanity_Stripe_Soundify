import { urlFor } from "@/lib/client";
import Link from "next/link";

export const HeroBanner = ({
	heroBProp: { smallText, midText, largeText1, image, product, buttonText, desc },
}) => {
	return (
		<div className="hero-banner-container">
			<div>
				<p className="beats-solo">{smallText}</p>
				<h3>{midText}</h3>
				<h1>{largeText1}</h1>
				<img src={urlFor(image)} alt="headphones" className="hero-banner-image" />

				<div>
					<Link href={`/product/${product}`}>
						<button type="button">{buttonText}</button>
						<div className="desc">
							<h5>Description</h5>
							<p>{desc}</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};
