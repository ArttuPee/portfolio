import React from "react";
import Button from "@mui/material/Button";
import Table from "./Table";
import { useDynamicStateContext } from "../context";

const TableSection = () => {
	const { state, allYearsTableData, tableRef, refreshTable } =
		useDynamicStateContext();

	const [showTable, setShowTable] = React.useState(false);

	React.useEffect(() => {
		setShowTable(false);
	}, [state, setShowTable]);
	return (
		<section ref={tableRef} className="table-container">
			<div className="btn-container">
				{!showTable ? (
					<Button
						id="show-table-btn"
						variant="contained"
						color="primary"
						onClick={() => {
							refreshTable();
							setShowTable(true);
							tableRef.current.scrollIntoView({
								behavior: "smooth",
							});
						}}
					>
						Taulukko
					</Button>
				) : (
					<Button
						id="hide-table-btn"
						variant="contained"
						color="primary"
						onClick={() => {
							setShowTable(false);
						}}
					>
						Piilota
					</Button>
				)}
			</div>
			{showTable ? (
				<Table data={allYearsTableData} selected={state.selected} />
			) : (
				""
			)}
		</section>
	);
};

export default TableSection;
