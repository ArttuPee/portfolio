import { createTheme } from "@mui/material";
import { fiFI } from "@mui/material/locale";


let theme = createTheme({
	breakpoints: {
		values: {
			sm: 450,
		},
	},
	palette: {
		primary: {
			main: "#3f51b5",
		},
		secondary: {
			main: "#f50057",
		},
	},
	fiFI
});

theme = createTheme(theme, {
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					backgroundColor: "#fff",
				},
			},
		},
		MuiToggleButtonGroup: {
			styleOverrides: {
				root: {
					backgroundColor: "#fff",
				},
			},
		},
	},
});

export default theme;
