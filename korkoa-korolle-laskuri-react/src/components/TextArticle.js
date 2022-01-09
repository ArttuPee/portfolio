import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TextArticle = () => {
	return (
		<article className="textArticle">
			<Box
				sx={{
					bgcolor: "#fff",
					boxShadow: 4,
					borderRadius: 2,
					p: 3,
					mt: 10,
					mb: 10,
				}}
			>
				<Typography variant="h4" component="h2" gutterBottom>
					Mitä korkoa korolle -ilmiö tarkoittaa?
				</Typography>
				<Typography paragraph>
					Korkoa korolle -ilmiöksi kutsutaan lumipalloefektimäistä
					prosessia, jossa alkuperäisen pääoman lisäksi myös pääomalle
					kertyneelle korolle maksetaan korkoa. Tämän takia sitä
					kutsutaan myös kumulatiiviseksi koroksi tai koronkoroksi.
					Ilmiö on eksponentiaalinen eli se kasvaa itsestään ja saa
					lisää vauhtia ajan myötä.
				</Typography>
				<Typography paragraph>
					Kun sijoitat, korkoa korolle –ilmiö on ystäväsi.
					Varallisuutesi kasvaa saamasi tuoton verran ja
					uudelleensijoittamalla tuotot, saat lisää tuottoa myös tälle
					tuotolle. Mikäli sinulla on velkaa, on koronkorko sinun
					vihollisesi. Velan määrä kasvaa koron myötä ja myös tämä
					koronkorko kerää korkoa.
				</Typography>

				<Typography paragraph>
					Korkoa korolle –ilmiötä ei ole helppoa ymmärtää. Tämä johtuu
					sen eksponentiaalisesta luonteesta. Paras keino ilmiön
					todellisen mahdin ymmärtämiseen on ylläolevan laskurin
					kaltaisen työkalun käyttäminen. Pääset itse vaihtamaan
					lukuja ja huomaat millaisia vaikutuksia niillä on
					lopputulokseen. Kaksi merkittävintä muuttujaa ovat
					tuottoprosentti ja aika.
				</Typography>
				<Typography paragraph>
					Laskurimme eroaa muista netistä löytyvistä laskureista siten
					että sen avulla on helppo havainnollistaa myös kulujen
					vaikutusta.{" "}
				</Typography>

				<Typography variant="h5" component="h3" gutterBottom>
					Korkoa korolle vs yksinkertainen korko
				</Typography>

				<Typography paragraph>
					Yksinkertainen korko tarkoittaa tilannetta, jossa korkoa
					kertyy ainoastaan pääomalle. Tässä tilanteessa ansaittua
					korkoa ei sijoiteta uudelleen.
				</Typography>
				<Typography paragraph>
					Jos saisit 10 % vuotuista korkoa 100 eurolle, ansaitset 10
					euroa vuodessa. Vuoden lopussa sinulla olisi 110 euroa:
					alkuperäinen 100 euroa + 10 euroa korkoa. Kahden vuoden
					kuluttua sinulla on 120 euroa. 15 vuoden kuluttua sinulla
					olisi alkuperäinen 100 euroa + 15 x 10 euroa korkoa eli
					yhteensä 250 euroa.
				</Typography>
				<Typography paragraph>
					Koronkorko puolestaan saa myös 10 euron koron tekemään töitä
					puolestasi ansaitakseen entistä enemmän rahaa. Toisena
					vuonna ansaitsisit korkoa 110 euron pääomasta, alkuperäisen
					100 euron sijaan. Tämä tarkoittaa, että saldosi kahden
					vuoden jälkeen on 121 euroa. Tämä voi aluksi kuulostaa
					merkityksettömältä, mutta 15 vuoden päästä olisit ansainnut
					418 euroa 250 euron sijasta.
				</Typography>
				<Typography paragraph>
					Pitkällä aikavälillä ja hyvällä tuotolla korkoa korolle
					–ilmiö saa aikaan suurenmoisia tuloksia.
				</Typography>
			</Box>
		</article>
	);
};

export default TextArticle;
