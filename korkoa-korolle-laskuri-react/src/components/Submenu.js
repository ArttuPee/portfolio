import React, { useState, useRef, useEffect } from "react";

const Submenu = (props) => {
	const {
		isSubmenuOpen,
		closeSubmenu,
		location,
		page: { page, links, pageLink },
	} = props;

	const container = useRef(null);
	const [columns, setColumns] = useState("col-2");

	useEffect(() => {
		setColumns("col-2");
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;

		if (links.length === 3) {
			setColumns("col-3");
		}
		if (links.length > 3) {
			setColumns("col-4");
		}
	}, [location, links]);

	return (
		<aside
			className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
			ref={container}
			onMouseLeave={closeSubmenu}
		>
			<h3>
				<a href={pageLink}>{page}</a>
			</h3>
			<div className={`submenu-center ${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url, sublinks } = link;
					return (
						<div key={"div-h4-a-" + index}>
							<h4>
								<a href={url}>
									{icon}
									{label}
								</a>
							</h4>
							{sublinks.map((link, index) => {
								const { label, url } = link;
								return (
									<p key={"p-a-" + index}>
										<a href={url}>{label}</a>
									</p>
								);
							})}
						</div>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
