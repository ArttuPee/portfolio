import React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { useDynamicDispatchContext } from "../../context";

const CompoundFrequencyFormArea = (props) => {
	const dispatch = useDynamicDispatchContext();
	const { matches } = props;
	const [compoundFrequencyForShow, setCompoundFrequencyForShow] = React.useState(1)

	const handleChange = (e, newValue)=>{
		if (newValue !== null) {
			dispatch({
				type: "compoundFrequency",
				payload: { value: newValue },
			});
			setCompoundFrequencyForShow(newValue);
		}
	}

	return (
		<>
			{matches ? (
				<div id="compound-frequency-area">
					<p>Kuinka usein korko lasketaan:</p>
					<ToggleButtonGroup
						value={compoundFrequencyForShow}
						orientation={matches ? "horizontal" : "vertical"}
						exclusive
						onChange={handleChange}
						size="small"
						color="primary"
					>
						<ToggleButton value={1}>Vuosittain</ToggleButton>
						<ToggleButton value={4}>3kk välein</ToggleButton>
						<ToggleButton value={12}>Kuukausittain</ToggleButton>
						<ToggleButton value={365}>Päivittäin</ToggleButton>
					</ToggleButtonGroup>
				</div>
			) : (
				""
			)}
		</>
	);
};

export default CompoundFrequencyFormArea;
