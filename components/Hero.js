import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="bg-fixed object-top">
			<div className="bg-fixed ">
				<Image
					src={`https://image.tmdb.org/t/p/original/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg`}
					priority={true}
					width={700}
					height={300}
					layout="responsive"
					alt="home cinema"
				/>
			</div>
		</div>
	);
};

export default Hero;

