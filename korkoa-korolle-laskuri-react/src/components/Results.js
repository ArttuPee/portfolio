import React from "react";
import { useDynamicStateContext } from "../context";
import { numberToCorrectFormatString } from "../utils";

const Results = () => {
	const { state, finalResult, resultsRef } = useDynamicStateContext();
	return (
		<section ref={resultsRef} className="result-container">
			<div className="result">
				{isNaN(finalResult)
					? "0"
					: `${numberToCorrectFormatString(finalResult, 0)} 
                  euroa ${state.years} vuodessa`}
			</div>
		</section>
	);
};

export default Results;
