import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import PrincipalFormArea from "./PrincipalFormArea";
import ContributionFormArea from "./ContributionFormArea";
import InterestFormArea from "./InterestFormArea";
import YearsFormArea from "./YearsFormArea";
import CompoundFrequencyArea from "./CompoundFrequencyFormArea.js";
import FeesFormArea from "./FeesFormArea";

const Form = () => {
	const matches = useMediaQuery("(min-width:500px)");
	const contributionRef = React.useRef(30);

	return (
		<form className="form-container">
			<PrincipalFormArea />
			<ContributionFormArea contributionRef={contributionRef}/>
			<InterestFormArea matches={matches} />
			<YearsFormArea />
			<CompoundFrequencyArea matches={matches} />
			<FeesFormArea matches={matches} />
		</form>
	);
};

export default Form;
