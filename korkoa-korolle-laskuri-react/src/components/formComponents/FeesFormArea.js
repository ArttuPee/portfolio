import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useDynamicDispatchContext } from "../../context";
import Checkbox from "@mui/material/Checkbox";
import NumberFormat from "react-number-format";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import { changeValueToBeInRange } from "../../utils";

const FeesFormArea = (props) => {
	const dispatch = useDynamicDispatchContext();

	const [selectedForShow, setSelectedForShow] = React.useState(false);

	const handleCheckboxClick = () => {
		setSelectedForShow(!selectedForShow);
		dispatch({
			type: "fees",
			payload: { value: 0 },
		});
		dispatch({
			type: "comissionFee",
			payload: { comissionFee: 0 },
		});
		dispatch({
			type: "comissionType",
			payload: { comissionType: "no" },
		});
		dispatch({ type: "selected" });
	};
	return (
		<div id="fees-area">
			<span className="fees-area-label" id="checkbox">
				Huomioidaanko kulut:{" "}
				<Checkbox
					value="check"
					selected={selectedForShow}
					onClick={handleCheckboxClick}
				></Checkbox>
			</span>

			{selectedForShow ? (
				<>
					<ManagementFeesArea matches={props.matches} />
					<ComissionFeesArea/>
				</>
			) : (
				""
			)}
		</div>
	);
};

const ManagementFeesArea = (props) => {
	const [feesForShow, setFeesForShow] = React.useState(0);
	const { matches } = props;
	const dispatch = useDynamicDispatchContext();

	const feeMarks = [
		{
			value: 0,
			scaledValue: 0,
			label: "0%",
		},
		{
			value: 50,
			scaledValue: 0.2,
			label: "0.2%",
		},
		{
			value: 100,
			scaledValue: 0.5,
			label: "0.5%",
		},
		{
			value: 150,
			scaledValue: 1,
			label: "1%",
		},
		{
			value: 200,
			scaledValue: 5,
			label: "5%",
		},
		{
			value: 250,
			scaledValue: 10,
			label: "10%",
		},
		{
			value: 300,
			scaledValue: 20,
			label: "20%",
		},
	];
	const scale = (value) => {
		const previousMarkIndex = Math.floor(value / 50);
		const previousMark = feeMarks[previousMarkIndex];
		const remainder = value % 50;
		if (remainder === 0) {
			return previousMark.scaledValue;
		}
		const nextMark = feeMarks[previousMarkIndex + 1];
		const increment =
			(nextMark.scaledValue - previousMark.scaledValue) / 50;
		return remainder * increment + previousMark.scaledValue;
	};
	const descale = (scaledValue) => {
		const feeIndex = feeMarks.findIndex(
			(fee) => fee.scaledValue >= scaledValue
		);
		const fee = feeMarks[feeIndex];
		if (fee.scaledValue === scaledValue) {
			return fee.value;
		}
		if (feeIndex === 0) {
			return 0;
		}
		const m =
			(fee.scaledValue - feeMarks[feeIndex - 1].scaledValue) /
			(fee.value - feeMarks[feeIndex - 1].value || 1);
		const dX = scaledValue - feeMarks[feeIndex - 1].scaledValue;
		return dX / m + feeMarks[feeIndex - 1].value;
	};
	const handleSliderOnChange = (e, newValue) => {
		setFeesForShow(newValue);
		const correctValue = scale(newValue);
		const valueInRange = changeValueToBeInRange(correctValue, 0, 20);
		dispatch({
			type: "fees",
			payload: { value: valueInRange },
		});
	};
	const handleSliderOnChangeCommitted = (e, newValue) => {
		const correctValue = scale(newValue);
		const valueInRange = changeValueToBeInRange(correctValue, 0, 20);
		dispatch({
			type: "fees",
			payload: { value: valueInRange },
		});
	};
	return (
		<div id="management">
			<p>Hallinnointipalkkio / vuosi</p>
			<Slider
				className="slider"
				id="fees-slider"
				value={feesForShow}
				min={0}
				step={1}
				max={300}
				marks={matches ? feeMarks : []}
				scale={scale}
				onChange={handleSliderOnChange}
				onChangeCommitted={handleSliderOnChangeCommitted}
			/>
			<div className="textField-and-info">
				<NumberFormat
					customInput={TextField}
					decimalSeparator={"."}
					decimalScale={2}
					size="small"
					className="textField"
					label="Kulut-%"
					value={scale(feesForShow)}
					inputProps={{
						step: 0.01,
						min: 0,
						max: 20,
						type: "number",
					}}
					onChange={(e) => {
						let value = e.target.value;
						let valueForShow = descale(parseFloat(e.target.value));
						const valueInRange = changeValueToBeInRange(
							value,
							0,
							20
						);
						dispatch({
							type: "fees",
							payload: { value: valueInRange },
						});
						setFeesForShow(valueForShow);
					}}
				/>
				<span className="form-area-info">%</span>
			</div>
		</div>
	);
};

const ComissionFeesArea = () => {
	const dispatch = useDynamicDispatchContext();
	const [comissionFeeForShow, setComissionFeeForShow] = React.useState(0);
	const [comissionTypeForShow, setComissionTypeForShow] =
		React.useState("no");

	const handleComissionTypeChange = (e, newValue) => {
		if (newValue !== null) {
			dispatch({
				type: "comissionType",
				payload: { comissionType: newValue },
			});
			dispatch({
				type: "comissionFee",
				payload: { comissionFee: 0 },
			});
			setComissionTypeForShow(newValue);
			setComissionFeeForShow(0);
		}
	};

	const handleTextFieldOnChange = (e, newValue) => {
		let max = comissionTypeForShow === "percent" ? 10 : 100;
		const valueInRange = changeValueToBeInRange(e.target.value, 0, max);
		dispatch({
			type: "comissionFee",
			payload: { comissionFee: valueInRange },
		});
		setComissionFeeForShow(valueInRange);
	};
	return (
		<div id="comission">
			<p>Välitys- tai merkintäpalkkio / toimeksianto</p>
			<ToggleButtonGroup
				value={comissionTypeForShow}
				className="toggle-button-group"
				// orientation={matches ? "horizontal" : "vertical"}
				exclusive
				size="small"
				color="primary"
				fullWidth
				onChange={handleComissionTypeChange}
			>
				<ToggleButton value={"no"}>Ei</ToggleButton>
				<ToggleButton value={"percent"}>%</ToggleButton>
				<ToggleButton value={"euro"}>€</ToggleButton>
			</ToggleButtonGroup>
			{comissionTypeForShow === "no" ? (
				""
			) : comissionTypeForShow === "percent" ? (
				<div className="textField-and-info">
					<TextField
						className="textField"
						label="Merkintäpalkkio"
						value={Number(comissionFeeForShow).toString()}
						inputProps={{
							step: 0.1,
							min: 0,
							max: 10,
							type: "number",
						}}
						onChange={handleTextFieldOnChange}
					/>
					<span className="form-area-info">%</span>
				</div>
			) : (
				<div className="textField-and-info">
					<TextField
						className="textField"
						label="Välityspalkkio"
						value={Number(comissionFeeForShow).toString()}
						inputProps={{
							step: 0.1,
							min: 0,
							max: 100,
							type: "number",
						}}
						onChange={handleTextFieldOnChange}
					/>
					<span className="form-area-info">€</span>
				</div>
			)}
		</div>
	);
};

export default FeesFormArea;
