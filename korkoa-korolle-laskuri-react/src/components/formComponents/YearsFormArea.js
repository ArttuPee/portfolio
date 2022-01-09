import React from "react";
import BasicFormAreaStacked from "./BasicFormAreaStacked";

const YearsFormArea = () => {
	const [yearsForShow, setYearsForShow] = React.useState(10);

	return (
		<BasicFormAreaStacked
			areaID="years-area"
			areaLabel="Aika vuosina"
			label="Vuodet"
			value={yearsForShow}
			inputProps={{
				step: 1,
				min: 0,
				max: 70,
				type: "number",
			}}
			handleChangeTarget="years"
			step={1}
			min={0}
			max={70}
			infoSuffix="euroa"
			sliderMax={60}
			setForShow={setYearsForShow}
		/>
	);
};

export default YearsFormArea;
