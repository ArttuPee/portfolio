import React, { useState } from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import sublinks from "../data";

const Header = (props) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({});
	const [page, setPage] = useState({ page: "", links: [] });

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};
	return (
		<header>
			<Navbar
				openSidebar={openSidebar}
				openSubmenu={openSubmenu}
				closeSubmenu={closeSubmenu}
			/>
			<Sidebar
				isSidebarOpen={isSidebarOpen}
				closeSidebar={closeSidebar}
			/>
			<Submenu
				isSubmenuOpen={isSubmenuOpen}
				location={location}
				page={page}
				closeSubmenu={closeSubmenu}
			/>
			<Hero
				showImage={props.showImage}
				heroH1={props.heroH1}
				heroH2={props.heroH2}
				heroP={props.heroP}
			/>
		</header>
	);
};

export default Header;
