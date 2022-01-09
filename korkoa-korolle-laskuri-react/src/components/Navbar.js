import React from "react";
import { FaBars } from "react-icons/fa";
import hatLogo from "../../public/hat_logo.png";
import Image from "next/image";

const Navbar = (props) => {
	const { openSidebar, openSubmenu, closeSubmenu } = props;

	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom;

		openSubmenu(page, { center, bottom });
	};

	const handleSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	};

	return (
		<nav className="nav" onMouseOver={handleSubmenu}>
			<div className="nav-center">
				<div className="nav-image-container">
					<a href="https://rahavelho.fi/">
						<Image
							className="img"
							src={hatLogo}
							alt="RahaVelho hattu logo"
							width={90}
							height={54}
						/>
					</a>
				</div>
				<div className="nav-header">
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							Laskurit
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							Kirjoitukset
						</button>
					</li>
					<li>
						<button
							className="link-btn"
							onMouseOver={displaySubmenu}
						>
							Videot
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
