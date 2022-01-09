import React, { useMemo } from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const Styles = styled.div`
	padding: 1rem;

	table {
		border-spacing: 0;
		border: 2px solid #002984;
		tr {
			:nth-child(odd) {
				background: #fff;
			}
			:nth-child(even) {
				background: #edf2fa;
			}
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}
		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1.5px solid #3f51b5;
			border-right: 1.5px solid #3f51b5;
			color: #002984;

			:last-child {
				border-right: 0;
			}
		}
		th {
			border-bottom: 2px solid #002984;
			border-right: 2px solid #002984;
			color: #002984;
			background-color: #edf2fa;
			:last-child {
				border-right: 0;
			}
		}
	}
`;

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
		});

	// Render the UI for your table
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup, i) => (
					<tr
						key={"header-tr-" + i}
						{...headerGroup.getHeaderGroupProps()}
					>
						{headerGroup.headers.map((column, i) => (
							<th
								key={"header-th-" + i}
								{...column.getHeaderProps()}
							>
								{column.render("Header")}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
					prepareRow(row);
					return (
						<tr key={"body-tr-" + i} {...row.getRowProps()}>
							{row.cells.map((cell, i) => {
								return (
									<td
										key={"body-td-" + i}
										{...cell.getCellProps()}
									>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

const App = ({ data, selected }) => {
	const columns = useMemo(
		() => [
			{
				Header: "Vuodet",
				accessor: "year",
			},
			{
				Header: "Kokonaissäästöt",
				accessor: "total",
			},
			{
				Header: "Lisäykset yhteensä",
				accessor: "contribution",
			},
			{
				Header: "Korko yhteensä",
				accessor: "interest",
			},
		],
		[]
	);
	const columnsWithFees = useMemo(
		() => [
			{
				Header: "\xa0\xa0Vuodet\xa0\xa0",
				accessor: "year",
			},
			{
				Header: "Kokonaissäästöt",
				accessor: "total",
			},
			{
				Header: "Lisäykset yhteensä",
				accessor: "contribution",
			},
			{
				Header: "Korko yhteensä",
				accessor: "interest",
			},
			{
				Header: "Kulut yhteensä",
				accessor: "fees",
			},
			{
				Header: "Menetetty koronkorko",
				accessor: "lostCompoundInterest",
			},
			{
				Header: "Kulujen kokonaisvaikutus",
				accessor: "totalEffectOfFees",
			},
		],
		[]
	);
	return (
		<Styles columns={selected ? columnsWithFees : columns} data={data}>
			<Table columns={selected ? columnsWithFees : columns} data={data} />
		</Styles>
	);
};

export default App;
