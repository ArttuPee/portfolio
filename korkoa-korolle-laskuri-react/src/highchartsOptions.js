import Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

if (typeof Highcharts === 'object') {
	HC_exporting(Highcharts);
	
	Highcharts.setOptions({
		lang: {
			thousandsSep: " ",
			decimalPoint: ",",
		},
	});
}
const defaultOptions = {
	exporting: {
		filename: "rahavelho.fi_korkoa_korolle",
		fallbackToExportServer: false,
		menuItemDefinitions: {
			downloadPNG: {
				text: "Lataa PNG",
			},
			downloadJPEG: {
				text: "Lataa JPEG",
			},
			downloadSVG: {
				text: "Lataa SVG",
			},
		},
		buttons: {
			contextButton: {
				menuItems: ["downloadPNG", "downloadJPEG", "downloadSVG"],
			},
		},
	},
	chart: {
		renderTo: "container",
	},
	credits: {
		text: "rahavelho.fi",
		href: "https://rahavelho.fi",
	},
	lang: {
		decimalPoint: ",",
	},

	title: {
		text: "Kokonaissäästöt",
	},
	tooltip: {
		valueDecimals: 2,
		valueSuffix: " €",
		shared: true,
	},
	plotOptions: {
		column: {
			grouping: false,
			stacking: "normal",
		},
		area: {
			stacking: "normal",
		},
	},
	xAxis: {
		title: {
			text: "Vuodet",
		},
	},
	yAxis: {
		min: 0,
		title: {
			text: "Euroa (€)",
		},
		labels: {
			formatter: function () {
				return new Intl.NumberFormat("fi-FI", {
					style: "currency",
					currency: "EUR",
					notation: "compact",
					compactDisplay: "short",
				}).format(this.value);
			},
		},
	},
};

export { defaultOptions };
