import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";

const Sidebar = (props) => {
	const { isSidebarOpen, closeSidebar } = props;
	return (
		<aside
			className={`${
				isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
			}`}
		>
			<div className="sidebar">
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className="sidebar-links">
					{sublinks.map((item, index) => {
						const { links, page, pageLink } = item;
						return (
							<article key={"article-" + index}>
								<h3>
									<a href={pageLink}>{page}</a>
								</h3>{" "}
								<div className="sidebar-sublinks">
									{links.map((link, index) => {
										const { url, icon, label, sublinks } =
											link;
										return (
											<div key={"div-h4-a" + index}>
												<h4>
													<a href={url}>
														{icon}
														{label}
													</a>
												</h4>
												{sublinks.map((link, index) => {
													const { label, url } = link;
													return (
														<p key={"p-a" + index}>
															<a href={url}>
																{label}
															</a>
														</p>
													);
												})}
											</div>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
