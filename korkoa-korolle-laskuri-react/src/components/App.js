import React from "react";
import TextArticle from "./TextArticle";
import Header from "./Header";
import { DynamicProvider } from "../context";
import Form from "./formComponents/Form";
import Results from "./Results";
import Charts from "./Charts";
import TableSection from "./TableSection";
import Box from "@mui/material/Box";
import BackgroundBox from "./BackgroundBox";
import Footer from "./Footer";

function App() {
	const heroH1 = "Korkoa korolle -laskuri";
	const heroH2 = "Laske sijoituksen tuotto, huomioi kulujen vaikutus";
	const heroP = "Selvitä kuinka rahasi voivat kasvaa korkoa korolle –ilmiön ansiosta. Laskurin avulla voit huomioida myös kulujen vaikutuksen.";
	return (
		<>
			<Header
				showImage={true}
				heroH1={heroH1}
				heroH2={heroH2}
				heroP={heroP}
			/>
			<div className="container">
				<main className="main">
					<BackgroundBox />
					<DynamicProvider>
						<Box
							className="dynamic"
							sx={{
								bgcolor: "#fafafa",
								boxShadow: 4,
								borderRadius: 15,
								mt: 0,
							}}
						>
							<Form />
							<Results />
							<Charts />
							<TableSection />
						</Box>
						<div className="backgroundBox"></div>
					</DynamicProvider>
					<BackgroundBox />

					<TextArticle />
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
