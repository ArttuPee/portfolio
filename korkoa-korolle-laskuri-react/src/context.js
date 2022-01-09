import React, {
	useState,
	useEffect,
	useRef,
	useContext,
	useReducer,
} from "react";
import { numberToCorrectFormatString } from "./utils";

const initialState = {
	principal: 1000,
	contribution: 30,
	interest: 7,
	years: 10,
	compoundFrequency: 1,
	fees: 0,
	comissionType: "no",
	comissionFee: 0,
	selected: false,
};

function reducer(state, action) {
	switch (action.type) {
		case "principal":
			return { ...state, principal: action.payload.value };
		case "years":
			return { ...state, years: action.payload.value };
		case "interest":
			return { ...state, interest: action.payload.value };
		case "contribution":
			return { ...state, contribution: action.payload.value };
		case "compoundFrequency":
			return { ...state, compoundFrequency: action.payload.value };
		case "fees":
			return { ...state, fees: action.payload.value };
		case "selected":
			return { ...state, selected: !state.selected };
		case "comissionType":
			return { ...state, comissionType: action.payload.comissionType };
		case "comissionFee":
			return { ...state, comissionFee: action.payload.comissionFee };
		default:
			throw new Error();
	}
}
const DynamicDispatchContext = React.createContext();
const DynamicStateContext = React.createContext();

export const DynamicProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [totalAllYears, setTotalAllYears] = useState([]);
	const [contributionsAllYears, setContributionsAllYears] = useState([]);
	const [feesAllYears, setFeesAllYears] = useState([]);
	const [interestAllYears, setInterestAllYears] = useState([]);
	const [lostCompoundInterestAllYears, setLostCompoundInterestAllYears] =
		useState([]);
	const [totalEffectOfFeesAllYears, setTotalEffectOfFeesAllYears] = useState(
		[]
	);
	const [allYearsTableData, setAllYearsTableData] = useState([]);
	const [finalResult, setFinalResult] = useState(0);
	const [finalContributions, setFinalContributions] = useState(0);
	const [finalInterest, setFinalInterest] = useState(0);
	const [finalFees, setFinalFees] = useState(0);
	const [finalLostCompoundInterest, setFinalLostCompoundInterest] =
		useState(0);
	const resultsRef = useRef();
	const tableRef = useRef();

	const refreshTable = React.useCallback(() => {
		let tempTableData = [];
		totalAllYears.forEach((total, i) => {
			let yearStr = "Vuosi " + i;
			let totalStr = numberToCorrectFormatString(total, 2) + " €";
			let contributionStr =
				numberToCorrectFormatString(contributionsAllYears[i], 2) + " €";
			let interestStr =
				numberToCorrectFormatString(interestAllYears[i], 2) + " €";
			let feesStr = state.selected
				? numberToCorrectFormatString(feesAllYears[i], 2) + " €"
				: "0,00 €";
			let lostCompoundInterestStr = state.selected
				? numberToCorrectFormatString(
						lostCompoundInterestAllYears[i],
						2
				  ) + " €"
				: "0,00 €";
			let totalEffectOfFeesStr = state.selected
				? numberToCorrectFormatString(totalEffectOfFeesAllYears[i], 2) +
				  " €"
				: "0,00 €";
			let newObject = {
				year: yearStr,
				total: totalStr,
				contribution: contributionStr,
				interest: interestStr,
				fees: feesStr,
				lostCompoundInterest: lostCompoundInterestStr,
				totalEffectOfFees: totalEffectOfFeesStr,
			};
			tempTableData.push(newObject);
		});
		setAllYearsTableData(tempTableData);
	}, [
		contributionsAllYears,
		feesAllYears,
		interestAllYears,
		lostCompoundInterestAllYears,
		state.selected,
		totalAllYears,
		totalEffectOfFeesAllYears,
	]);

	useEffect(() => {
		const calculateFinalResult = () => {
			let realPrincipal = state.principal;
			let realContribution = state.contribution;
			if (state.comissionType === "percent") {
				realContribution =
					(1 - state.comissionFee / 100) * state.contribution;
				realPrincipal =
					state.principal * (1 - state.comissionFee / 100);
				realPrincipal = realPrincipal < 0 ? 0 : realPrincipal;
			}
			if (state.comissionType === "euro") {
				realContribution = state.contribution - state.comissionFee;
				realContribution = realContribution < 0 ? 0 : realContribution;
				realPrincipal = state.principal - state.comissionFee;
				realPrincipal = realPrincipal < 0 ? 0 : realPrincipal;
			}

			const PMT = (realContribution * 12) / state.compoundFrequency;
			const netInterestPercent = (state.interest - state.fees) / 100;
			let result = 0;
			if (netInterestPercent === 0) {
				result =
					realPrincipal + state.compoundFrequency * PMT * state.years;
			} else {
				result =
					realPrincipal *
						Math.pow(
							1 + netInterestPercent / state.compoundFrequency,
							state.compoundFrequency * state.years
						) +
					(PMT *
						(Math.pow(
							1 + netInterestPercent / state.compoundFrequency,
							state.compoundFrequency * state.years
						) -
							1)) /
						(netInterestPercent / state.compoundFrequency);
			}
			setFinalResult(result);
		};

		calculateFinalResult();
	}, [state]);

	useEffect(() => {
		const calculateAllYears = () => {
			let realPrincipal = state.principal;
			let realContribution = state.contribution;
			let comissionFeeAmount = 0;
			if (state.comissionType === "percent") {
				realContribution =
					(1 - state.comissionFee / 100) * state.contribution;
				comissionFeeAmount =
					(state.comissionFee / 100) * state.contribution;
				realPrincipal =
					state.principal * (1 - state.comissionFee / 100);
				realPrincipal = realPrincipal < 0 ? 0 : realPrincipal;
			}
			if (state.comissionType === "euro") {
				realContribution = state.contribution - state.comissionFee;
				realContribution = realContribution < 0 ? 0 : realContribution;
				comissionFeeAmount =
					state.comissionFee <= state.contribution
						? state.comissionFee
						: state.contribution;
				realPrincipal = state.principal - state.comissionFee;
				realPrincipal = realPrincipal < 0 ? 0 : realPrincipal;
			}
			const PMT = (realContribution * 12) / state.compoundFrequency;
			const tempTotals = [realPrincipal];
			const tempContributions = [realPrincipal];
			const tempAllFees = [state.principal - realPrincipal];
			const tempTotalEffectOfFees = [state.principal - realPrincipal];
			const percentInterest = state.interest / 100;
			const percentFees = state.fees / 100;
			const netInterestPercent = (state.interest - state.fees) / 100;

			const tempTotalsIfNoFees = [state.principal];
			const noFeesPMT =
				(state.contribution * 12) / state.compoundFrequency;
			for (let i = 0; i < state.years; i++) {
				let noFeesResult =
					percentInterest === 0
						? tempTotalsIfNoFees[i] +
						  state.compoundFrequency * noFeesPMT
						: tempTotalsIfNoFees[i] *
								Math.pow(
									1 +
										percentInterest /
											state.compoundFrequency,
									state.compoundFrequency
								) +
						  (noFeesPMT *
								(Math.pow(
									1 +
										percentInterest /
											state.compoundFrequency,
									1 * state.compoundFrequency
								) -
									1)) /
								(percentInterest / state.compoundFrequency);

				tempTotalsIfNoFees.push(parseFloat(noFeesResult));

				let managementFees =
					percentFees === 0
						? 0
						: tempTotals[i] *
								Math.pow(
									1 + percentFees / state.compoundFrequency,
									state.compoundFrequency
								) +
						  (PMT *
								(Math.pow(
									1 + percentFees / state.compoundFrequency,
									1 * state.compoundFrequency
								) -
									1)) /
								(percentFees / state.compoundFrequency) -
						  (tempTotals[i] + realContribution * 12);
				let feesForThisPeriod =
					managementFees + comissionFeeAmount * 12;

				let resultWithTotalEffectOfFees =
					netInterestPercent === 0
						? tempTotals[i] + state.compoundFrequency * PMT
						: tempTotals[i] *
								Math.pow(
									1 +
										netInterestPercent /
											state.compoundFrequency,
									state.compoundFrequency
								) +
						  (PMT *
								(Math.pow(
									1 +
										netInterestPercent /
											state.compoundFrequency,
									1 * state.compoundFrequency
								) -
									1)) /
								(netInterestPercent / state.compoundFrequency);

				let totalEffectOfFeesForThisPeriod =
					noFeesResult - resultWithTotalEffectOfFees;

				tempAllFees.push(
					parseFloat(tempAllFees[i] + feesForThisPeriod)
				);

				tempTotalEffectOfFees.push(
					parseFloat(totalEffectOfFeesForThisPeriod)
				);
				tempContributions.push(
					parseFloat(tempContributions[i] + realContribution * 12)
				);
				tempTotals.push(parseFloat(resultWithTotalEffectOfFees));
			}

			const tempInterest = tempTotals.map((item, index) => {
				let interest = item - tempContributions[index];
				if (interest < 0) {
					tempAllFees[index] = parseFloat(
						tempAllFees[index] + interest
					);
					interest = 0;
				}
				return interest;
			});
			setInterestAllYears(tempInterest);
			const tempLostCompoundInterestAllYears = tempTotalEffectOfFees.map(
				(item, index) => {
					return item - tempAllFees[index];
				}
			);
			setLostCompoundInterestAllYears(tempLostCompoundInterestAllYears);
			setFeesAllYears(tempAllFees);
			setTotalEffectOfFeesAllYears(tempTotalEffectOfFees);
			setTotalAllYears(tempTotals);
			setContributionsAllYears(tempContributions);
			setFinalContributions(
				tempContributions[tempContributions.length - 1]
			);
			setFinalInterest(tempInterest[tempInterest.length - 1]);
			setFinalFees(tempAllFees[tempAllFees.length - 1]);
			setFinalLostCompoundInterest(
				tempLostCompoundInterestAllYears[
					tempLostCompoundInterestAllYears.length - 1
				]
			);
		};


		calculateAllYears();
	}, [state]);

	const contextStateValue = React.useMemo(() => {
		return {
			state,
			finalResult,
			totalAllYears,
			contributionsAllYears,
			feesAllYears,
			interestAllYears,
			lostCompoundInterestAllYears,
			totalEffectOfFeesAllYears,
			allYearsTableData,
			tableRef,
			resultsRef,
			refreshTable,
			finalContributions,
			finalInterest,
			finalFees,
			finalLostCompoundInterest,
		};
	}, [
		state,
		finalContributions,
		finalInterest,
		finalFees,
		finalLostCompoundInterest,
		finalResult,
		totalAllYears,
		contributionsAllYears,
		feesAllYears,
		interestAllYears,
		lostCompoundInterestAllYears,
		totalEffectOfFeesAllYears,
		allYearsTableData,
		tableRef,
		resultsRef,
		refreshTable,
	]);

	return (
		<DynamicDispatchContext.Provider value={dispatch}>
			<DynamicStateContext.Provider value={contextStateValue}>
				{children}
			</DynamicStateContext.Provider>
		</DynamicDispatchContext.Provider>
	);
};

export const useDynamicStateContext = () => {
	return useContext(DynamicStateContext);
};
export const useDynamicDispatchContext = () => {
	return useContext(DynamicDispatchContext);
};
