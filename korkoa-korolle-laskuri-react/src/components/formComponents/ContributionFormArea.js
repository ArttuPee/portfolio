import React from "react";
import BasicFormAreaStacked from "./BasicFormAreaStacked";

const ContributionFormArea = () => {
	const [contributionForShow, setContributionForShow] = React.useState(30);

	return (
		<BasicFormAreaStacked
			areaID="contribution-area"
			areaLabel="Lisäykset/kk"
			label="Lisäykset"
			value={contributionForShow}
			inputProps={{
				step: 10,
				min: 0,
				max: 5000,
				type: "number",
			}}
			handleChangeTarget="contribution"
			step={10}
			min={0}
			max={5000}
			infoSuffix="euroa"
			sliderMax={3000}
			setForShow={setContributionForShow}
		/>
	);
};

export default ContributionFormArea;
