import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { defaultOptions } from "../highchartsOptions";
import { useDynamicStateContext } from "../context";
import {
	AiFillPieChart,
	AiOutlineBarChart,
	AiOutlineAreaChart,
} from "react-icons/ai";

const Charts = () => {
	const [showBarChart, setShowBarChart] = useState(false);
	const [showAreaChart, setShowAreaChart] = useState(false);
	const [showPieChart, setShowPieChart] = useState(false);
	const {
		resultsRef,
		state,
		totalAllYears,
		contributionsAllYears,
		feesAllYears,
		interestAllYears,
		lostCompoundInterestAllYears,
		finalContributions,
		finalInterest,
		finalFees,
		finalLostCompoundInterest,
	} = useDynamicStateContext();


	// If I wanted to hide the charts every time result changes. 
	// React.useEffect(() => {
	// 	setShowBarChart(false);
	// 	setShowAreaChart(false);
	// 	setShowPieChart(false);
	// }, [totalAllYears]);

	const generalOptions = {
		...defaultOptions,
		series: [
			{
				name: "Korko",
				data: interestAllYears,
				color: "#757de8",
			},
			{
				name: "Lisäykset yhteensä",
				data: contributionsAllYears,
				color: "#3f51b5",
			},
		],
	};

	const generalOptionsWithFees = {
		...generalOptions,

		series: [
			{
				name: "Kulujen takia menetetty koronkorko",
				data: lostCompoundInterestAllYears,
				color: "#ff7fad",
			},
			{
				name: "Kulut",
				data: feesAllYears,
				color: "#ff5894",
			},
			{
				name: "Korko",
				data: interestAllYears,
				color: "#757de8",
			},
			{
				name: "Lisäykset",
				data: contributionsAllYears,
				color: "#3f51b5",
			},
		],
	};
	const generalOptionsWithFeesBiggerThanInterest = {
		...generalOptions,

		series: [
			{
				name: "Kulujen takia menetetty koronkorko",
				data: lostCompoundInterestAllYears,
				color: "#ff7fad",
			},
			{
				name: "Kulut",
				data: feesAllYears,
				color: "#ff5894",
			},
			{
				name: "Säästöt",
				data: totalAllYears,
				color: "#757de8",
			},
		],
	};

	const optionsPie = {
		...generalOptions,
		chart: {
			type: "pie",
		},
		title: {
			text: "Koron ja lisäyksien suhde",
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: "pointer",
				dataLabels: {
					enabled: true,
					format: "<b>{point.name}</b>: {point.percentage:.1f} %",
				},
			},
		},
		series: [
			{
				name: "Yhteensä",
				data: [
					{
						name: "Lisäykset",
						y: finalContributions,
						color: "#3f51b5",
					},
					{
						name: "Korko",
						y: finalInterest,
						color: "#757de8",
					},
				],
			},
		],
	};

	const optionsPieWithFees = {
		...optionsPie,
		title: {
			text: "Koron, lisäyksien ja kulujen suhde",
		},
		series: [
			{
				name: "Yhteensä",
				data: [
					{
						name: "Lisäykset",
						y: finalContributions,
						color: "#3f51b5",
					},
					{
						name: "Korko",
						y: finalInterest,
						color: "#757de8",
					},
					{
						name: "Kulut",
						y: finalFees,
						color: "#ff5894",
					},
					{
						name: "Kulujen takia menetetty koronkorko",
						y: finalLostCompoundInterest,
						color: "#ff7fad",
					},
				],
			},
		],
	};

	const handleChartButtonPress = (target) => {
		setShowBarChart(false);
		setShowAreaChart(false);
		setShowPieChart(false);
		if (target === "bar") {
			setShowBarChart(true);
		}
		if (target === "area") {
			setShowAreaChart(true);
		}
		if (target === "pie") {
			setShowPieChart(true);
		}
		resultsRef.current.scrollIntoView({
			behavior: "smooth",
		});
	};
	return (
		<section className="chart-container">
			<div className="btn-container">
				<IconButton
					aria-label="Pylväskuvaaja"
					sx={{
						m: "10px",
					}}
					id="bar-chart-btn"
					color="primary"
					onClick={() => {
						handleChartButtonPress("bar");
					}}
				>
					<AiOutlineBarChart size={42} />
				</IconButton>
				<IconButton
					aria-label="Pylväskuvaaja"
					sx={{
						m: "10px",
					}}
					id="area-chart-btn"
					color="primary"
					onClick={() => {
						handleChartButtonPress("area");
					}}
				>
					<AiOutlineAreaChart size={42} />
				</IconButton>
				<IconButton
					sx={{
						m: "10px",
					}}
					id="pie-chart-btn"
					color="primary"
					onClick={() => {
						handleChartButtonPress("pie");
					}}
				>
					<AiFillPieChart size={42} />
				</IconButton>
			</div>

			{showBarChart ? (
				<div className="chart-wrapper">
					<HighchartsReact
						highcharts={Highcharts}
						options={{
							...(state.selected
								? state.fees > state.interest
									? generalOptionsWithFeesBiggerThanInterest
									: generalOptionsWithFees
								: generalOptions),
							chart: {
								type: "column",
							},
						}}
					/>
				</div>
			) : (
				""
			)}
			{showAreaChart ? (
				<div className="chart-wrapper">
					<HighchartsReact
						highcharts={Highcharts}
						options={{
							...(state.selected
								? state.fees > state.interest
									? generalOptionsWithFeesBiggerThanInterest
									: generalOptionsWithFees
								: generalOptions),
							chart: {
								type: "area",
							},
						}}
					/>
				</div>
			) : (
				""
			)}
			{showPieChart ? (
				<div className="chart-wrapper">
					<HighchartsReact
						highcharts={Highcharts}
						options={state.selected ? optionsPieWithFees : optionsPie}
					/>
				</div>
			) : (
				""
			)}
		</section>
	);
};

export default Charts;
