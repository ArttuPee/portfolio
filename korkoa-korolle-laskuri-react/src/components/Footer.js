import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
	return (
		<div className="footer">
			<Typography>&copy; 2022 RahaVelho</Typography>
			<Typography sx={{p:3}}>
				<Link underline="hover" color="inherit" href="https://rahavelho.fi/tietosuojaseloste/">
					Tietosuojaseloste
				</Link>
			</Typography>
		</div>
	);
}
