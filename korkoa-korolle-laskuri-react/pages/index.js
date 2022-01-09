import React from "react";
import Head from "next/head";
import CIThumbnail from "../public/Korkoa_korolle-laskuri_ja_kulut.png";
import Image from "next/image";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import BackgroundBox from "../src/components/BackgroundBox";

export default function Home() {
	const title = "Kaikki laskurit - RahaVelho";
	const description = "Täältä löydät kaikki laskurimme!";
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta charSet="utf-8" />
				<meta name="robots" content="index, follow" />

				<title>{title}</title>
				<meta name="description" content={description} />
				<link
					rel="icon"
					href="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-32x32.png"
					sizes="32x32"
				/>
				<link
					rel="icon"
					href="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-192x192.png"
					sizes="192x192"
				></link>
				<link
					rel="apple-touch-icon"
					href="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-180x180.png"
				></link>
				<meta
					name="msapplication-TileImage"
					content="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-270x270.png"
				></meta>
			</Head>
			<Header
				showImage={false}
				heroH1="RahaVelho laskurit"
				heroH2="Kokeile netin parhaita rahaan liittyviä laskureita"
			/>
			<BackgroundBox />
			<div className="wrapper-home">
				<div className="container-home">
					<div className="card">
						<div className="card__header">
							<a href="https://rahavelho.fi/laskurit/korkoa-korolle-laskuri/">
								<Image
									src={CIThumbnail}
									alt="card__image"
									className="card__image"
									width={600}
									height={300}
								/>
							</a>
						</div>
						<div className="card__body">
							<span className="tag tag-blue">Laskuri</span>
							<a href="https://rahavelho.fi/laskurit/korkoa-korolle-laskuri/">
								<h4>Korkoa korolle –laskuri</h4>
							</a>
							<p>
								Selvitä kuinka rahasi voivat kasvaa korkoa
								korolle –ilmiön ansiosta. Laskurin avulla voit
								huomioida myös kulujen vaikutuksen.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
