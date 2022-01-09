import React from "react";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useDynamicDispatchContext } from "../../context";
import { changeValueToBeInRange } from "../../utils";

const BasicFormAreaStacked = (props) => {
	const dispatch = useDynamicDispatchContext();
	const {
		areaID,
		areaLabel,
		label,
		value,
		inputProps,
		handleChangeTarget,
		step,
		min,
		max,
		infoSuffix,
		sliderMax,
		marks,
		setForShow,
	} = props;

	const handleTextFieldOnChange = (e, newValue) => {
		const value = changeValueToBeInRange(
			parseFloat(newValue ? newValue : e.target.value),
			min,
			max
		);
		dispatch({
			type: handleChangeTarget,
			payload: { value },
		});
		setForShow(parseFloat(value));
	};
	const handleSliderOnChange = (e, newValue) => {
		setForShow(parseFloat(newValue));

		const value = changeValueToBeInRange(
			parseFloat(newValue ? newValue : e.target.value),
			min,
			max
		);
		dispatch({
			type: handleChangeTarget,
			payload: { value },
		});
	};

	return (
		<div className="form-area" id={areaID}>
			<p className="form-area-label">{areaLabel}</p>
			<div className="textField-and-info">
				<TextField
					className="textField"
					label={label}
					value={Number(
						isNaN(value)
							? 0
							: changeValueToBeInRange(value, min, max)
					).toString()}
					inputProps={inputProps}
					onChange={handleTextFieldOnChange}
				/>
				<span className="form-area-info">{infoSuffix}</span>
			</div>
			<Slider
				className="slider"
				value={value}
				step={step}
				min={min}
				max={sliderMax}
				marks={marks ? marks : []}
				onChange={handleSliderOnChange}
			/>
		</div>
	);
};

export default BasicFormAreaStacked;
