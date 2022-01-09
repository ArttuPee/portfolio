import App from "../src/components/App";
import Head from "next/head";


export default function CompoundInterestApp() {
	const title = "Korkoa korolle –laskuri - Laske sijoituksen tuotto ja kulut";
	const description =
		"Korkoa korolle –laskurin avulla voit laskea sijoitusten tuoton. Tämä laskuri mahdollistaa myös kulujen huomioimisen. Kokeile netin parasta tuottolaskuria!";
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-32x32.png" sizes="32x32"/>
				<link rel="icon" href="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-192x192.png" sizes="192x192"></link>
				<link rel="apple-touch-icon" href="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-180x180.png"></link>
				<meta name="msapplication-TileImage" content="https://rahavelho.fi/wp-content/uploads/2021/01/cropped-RahaVelho-kolikko-favicon-270x270.png"></meta>

				<meta charSet="utf-8" />
				<meta name="robots" content="index, follow" />

				<title>{title}</title>
				<meta name="description" content={description} />

				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://rahavelho.fi/laskurit/korkoa-korolle-laskuri/"
				/>
				<meta
					property="og:image"
					content="https://rahavelho.fi/laskurit/_next/static/media/Korkoa_korolle-laskuri_ja_kulut.6c34f12a.png"
				/>
				<meta property="og:locale" content="fi_FI" />
				<meta property="og:site_name" content="RahaVelho" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@RahaVelho" />
				<meta name="twitter:creator" content="@ArttuPyykonen" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta
					name="twitter:image"
					content="https://rahavelho.fi/laskurit/_next/static/media/Korkoa_korolle-laskuri_ja_kulut.6c34f12a.png"
				/>
			</Head>
			<App />
		</>
	);
}
