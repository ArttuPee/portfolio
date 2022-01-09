import React from "react";
import coinLogo from "../../public/coin_logo.png";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Hero = (props) => {
	return (
		<section className="hero">
			{props.showImage ? (
				<div className="hero-image-container">
					<Image
						className="img"
						src={coinLogo}
						alt="RahaVelho kolikko logo"
						width={240}
						height={240}
					/>
				</div>
			) : (
				<div className="hero-spacer"></div>
			)}

			<div className="hero-text">
				<Typography variant="h3" component="h1" align="center">
					{props.heroH1}
				</Typography>
				<Typography
					variant="h5"
					component="h2"
					align="center"
					gutterBottom
					>
					{props.heroH2}
					
				</Typography>
				<Typography gutterBottom paragraph align="center">
					{props.heroP}
				</Typography>
			</div>
		</section>
	);
};

export default React.memo(Hero);
