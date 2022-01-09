import React from "react";
import BasicFormAreaStacked from "./BasicFormAreaStacked";

const PrincipalFormArea = () => {
	const [principalForShow, setPrincipalForShow] = React.useState(1000);

	return (
		<BasicFormAreaStacked
			areaID="principal-area"
			areaLabel="Alkupääoma"
			label="Alkupääoma"
			value={principalForShow}
			inputProps={{
				step: 100,
				min: 0,
				max: 1000000,
				type: "number",
			}}
			handleChangeTarget="principal"
			step={100}
			min={0}
			max={1000000}
			infoSuffix="euroa"
			sliderMax={20000}
			setForShow={setPrincipalForShow}
		/>
	);
};

export default PrincipalFormArea;
