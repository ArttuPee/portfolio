import {
	FaCalculator,
	FaVideo,
	FaChartLine,
	FaMoneyBillAlt,
} from "react-icons/fa";
import { GiOilDrum, GiEarthAfricaEurope } from "react-icons/gi";
import { ImVideoCamera } from "react-icons/im";
import React from "react";
const sublinks = [
	{
		page: "Laskurit",
		pageLink: "https://rahavelho.fi/laskurit/",
		links: [
			{
				label: "Korkoa korolle",
				icon: <FaCalculator />,
				url: "https://rahavelho.fi/laskurit/korkoa-korolle-laskuri/",
				sublinks: [],
			},
		],
	},
	{
		page: "Kirjoitukset",
		pageLink: "https://rahavelho.fi/kirjoitukset/",
		links: [
			{
				label: "Sijoituskohteet",
				icon: <GiOilDrum />,
				url: "https://rahavelho.fi/category/sijoituskohteet/",
				sublinks: [
					{
						label: "Osakkeet",
						url: "https://rahavelho.fi/sijoituskohde-osakkeet/",
					},
					{
						label: "Rahastot",
						url: "https://rahavelho.fi/sijoituskohde-rahastot/",
					},
					{
						label: "ASP",
						url: "https://rahavelho.fi/asp/",
					},
					{
						label: "Kryptovaluutat",
						url: "https://rahavelho.fi/sijoituskohde-kryptovaluutat/",
					},
					{
						label: "Top 10 Kryptovaluutat",
						url: "https://rahavelho.fi/top-10-kryptovaluutat/",
					},
					{
						label: "Valuutat",
						url: "https://rahavelho.fi/sijoituskohde-valuutat/",
					},
					{
						label: "Johdannaiset",
						url: "https://rahavelho.fi/sijoituskohde-johdannaiset/",
					},
					{
						label: "Korkosijoittaminen",
						url: "https://rahavelho.fi/sijoituskohde-korkosijoittaminen/",
					},
					{
						label: "Asunnot",
						url: "https://rahavelho.fi/sijoituskohde-asuntosijoittaminen/",
					},
					{
						label: "ETF",
						url: "https://rahavelho.fi/sijoituskohde-etf/",
					},
					{
						label: "Hyödykkeet",
						url: "https://rahavelho.fi/sijoituskohde-hyodykkeet/",
					},
				],
			},
			{
				label: "Makronurkkaus",
				icon: <GiEarthAfricaEurope />,
				url: "https://rahavelho.fi/category/makronurkkaus/",
				sublinks: [
					{
						label: "Inflaatio",
						url: "https://rahavelho.fi/inflaatio/",
					},
					{
						label: "Pörssikurssit, arvostus ja talous",
						url: "https://rahavelho.fi/porssikurssit-arvostus-ja-talous/",
					},
					{
						label: "Deflaatio",
						url: "https://rahavelho.fi/deflaatio/",
					},
					{
						label: "Miksi pörssi on olemassa?",
						url: "https://rahavelho.fi/rahoitusjarjestelma/",
					},
					{
						label: "Hyperinflaatio",
						url: "https://rahavelho.fi/mita-on-hyperinflaatio/",
					},
					{
						label: "Mikro- ja makrotalous",
						url: "https://rahavelho.fi/mikro-ja-makrotalous/",
					},
					{
						label: "Kansallinen ja kansainvälinen talous",
						url: "https://rahavelho.fi/kansallinen-ja-kansainvalinen-talous/",
					},
				],
			},
			{
				label: "Säästäminen",
				icon: <FaMoneyBillAlt />,
				url: "https://rahavelho.fi/category/saastaminen/",
				sublinks: [
					{
						label: "12 tekoa, joilla pääset muiden edelle",
						url: "https://rahavelho.fi/pienet-teot/",
					},
					{
						label: "Kannattaako ASP?",
						url: "https://rahavelho.fi/asp/",
					},
					{
						label: "Hätäkassa, hätärahasto ja puskuri",
						url: "https://rahavelho.fi/puskurin-saastaminen/",
					},
					{
						label: "40 kysymystä ASP",
						url: "https://rahavelho.fi/40-kysymysta-asp/",
					},
					{
						label: "Budjetointi",
						url: "https://rahavelho.fi/budjetointi/",
					},
				],
			},
			{
				label: "Sijoittaminen",
				icon: <FaChartLine />,
				url: "https://rahavelho.fi/category/sijoittaminen/",
				sublinks: [
					{
						label: "AOT vs OST",
						url: "https://rahavelho.fi/aot-vs-ost/",
					},
					{
						label: "Osinkojen tärkeys sijoittamisessa",
						url: "https://rahavelho.fi/osingot-sijoittamisessa/",
					},
					{
						label: "Aloita rahastosijoittaminen",
						url: "https://rahavelho.fi/vinkit-rahastosijoittamiseen/",
					},
					{
						label: "Passiivinen tulo",
						url: "https://rahavelho.fi/passiivinen-tulo/",
					},
					{
						label: "20 kysymystä OST",
						url: "https://rahavelho.fi/20-kysymysta-ost/",
					},
					{
						label: "Mistä osakkeen hinta tulee?",
						url: "https://rahavelho.fi/osakkeen-hinta/",
					},
					{
						label: "Ajallinen hajauttaminen",
						url: "https://rahavelho.fi/ajallinen-hajauttaminen/",
					},
					{
						label: "Sijoittamisen opas aloittelijalle",
						url: "https://rahavelho.fi/sijoittaminen-ja-saasto-opas/",
					},
					{
						label: "Shorttaaminen",
						url: "https://rahavelho.fi/shorttaaminen/",
					},
					{
						label: "Maailman 100 vastuullisinta yritystä",
						url: "https://rahavelho.fi/maailman-100-vastuullisinta-yritysta-2021/",
					},
					{
						label: "Sijoittamisen riskit",
						url: "https://rahavelho.fi/riskit-sijoittamisessa/",
					},
					{
						label: "Vastuullinen sijoittaminen",
						url: "https://rahavelho.fi/eettinen-ja-vastuullinen-sijoittaminen/",
					},
				],
			},
		],
	},
	{
		page: "Videot",
		pageLink: "https://rahavelho.fi/category/videot",
		links: [
			{
				label: "Shorts",
				icon: <FaVideo />,
				url: "https://rahavelho.fi/category/videot/",
				sublinks: [
					{
						label: "Apple Arvo",
						url: "https://rahavelho.fi/kuinka-arvokas-apple-oikeasti-on/",
					},
					{
						label: "Suomen arvokkaimmat yritykset",
						url: "https://rahavelho.fi/suomen-arvokkaimmat-yritykset/",
					},
					{
						label: "10 vuodessa miljonääriksi",
						url: "https://rahavelho.fi/sijoitukset-10-vuotta-sitten/",
					},
					{
						label: "Yritysvisa #1",
						url: "https://rahavelho.fi/yritysvisa-1/",
					},
				],
			},
			{
				label: "Yritysesittelyt",
				icon: <ImVideoCamera />,
				url: "https://rahavelho.fi/category/videot/",
				sublinks: [
					{
						label: "Fortum",
						url: "https://rahavelho.fi/fortum-esittely/",
					},
					{
						label: "Sampo",
						url: "https://rahavelho.fi/sampo-esittely/",
					},
					{
						label: "Nordea",
						url: "https://rahavelho.fi/mita-nordea-tekee/",
					},
					{
						label: "Kone",
						url: "https://rahavelho.fi/kone-esittely/",
					},
					{
						label: "Nokia",
						url: "https://rahavelho.fi/nokia-esittely/",
					},
					{
						label: "Neste",
						url: "https://rahavelho.fi/neste-esittely/",
					},
				],
			},
		],
	},
];

export default sublinks;
