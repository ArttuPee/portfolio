import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import BasicFormAreaStacked from "./BasicFormAreaStacked";
import Link from "@mui/material/Link";


const InterestFormArea = (props) => {
	const HtmlTooltip = styled(({ className, ...props }) => (
		<Tooltip {...props} classes={{ popper: className }} />
	))(({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: "#f5f5f9",
			color: "rgba(0, 0, 0, 0.87)",
			maxWidth: 220,
			fontSize: theme.typography.pxToRem(12),
			border: "1px solid #dadde9",
		},
	}));
	const {matches} = props
	const [interestForShow, setInterestForShow] = React.useState(7);

	return (
		<BasicFormAreaStacked
			areaID="interest-area"
			areaLabel={
				<span>
					Tuotto / vuosi{" "}
					<HtmlTooltip
						title={
							<>
								<Typography color="inherit">
									Odottamasi tuotto sijoitukselle
								</Typography>
								<Typography>
									Merkinnät vastaavat suosittujen
									omaisuuslajien tuottoja. Lue aiheesta
									tarkemmin{" "}
									<Link href="https://rahavelho.fi/sijoittaminen-ja-saasto-opas/#sijoituskohteet">
										tästä!
									</Link>
								</Typography>
								{/* {
									"Merkinnät vastaavat suosittujen omaisuuslajien tuottoja. Lue aiheesta tarkemmin tästä."
								} */}
							</>
						}
						arrow
						placement={matches ? "right" : "bottom"}
					>
						<InfoIcon />
					</HtmlTooltip>
				</span>
			}
			label="Tuotto-%"
			value={interestForShow}
			inputProps={{
				step: 1,
				min: 0,
				max: 50,
				type: "number",
			}}
			handleChangeTarget="interest"
			step={1}
			min={0}
			max={50}
			infoSuffix="%"
			marks={[
				{
					value: 4,
					label: "4%",
				},
				{
					value: 7,
					label: "7%",
				},
				{
					value: 11,
					label: "11%",
				},
			]}
			sliderMax={25}
			setForShow={setInterestForShow}
		/>
	);
};

export default InterestFormArea;
