/** @format */

import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { auth } from "../firebase/firebase";
import { ProfileImageContext } from "../context/ProfileImageContext";

const Navbar = () => {
	const [show, handleShow] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const navigate = useNavigate();
	const { profileImg } = useContext(ProfileImageContext);

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("scroll", transitionNavbar);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const signOut = () => {
		auth.signOut();
		navigate("/login");
	};

	return (
		<div className={`nav ${show && "nav-black"}`}>
			<div className="navbar-left">
				<img src={logo} alt="netflix-logo" className="logo" />
				{isMobile ? (
					<div className="caret-icon">
						<p>Browse</p>
						<img src={caret_icon} alt="caret" className="caret" />
						<ul className="nav-options">
							<li>Home</li>
							<li>TV Shows</li>
							<li>Movies</li>
							<li>New & Popular</li>
							<li>My List</li>
							<li>Browse by Languages</li>
						</ul>
					</div>
				) : (
					<ul>
						<li>Home</li>
						<li>TV Shows</li>
						<li>Movies</li>
						<li>New & Popular</li>
						<li>My List</li>
						<li>Browse by Languages</li>
					</ul>
				)}
			</div>

			<div className="navbar-right">
				<img src={search_icon} alt="search-icon" className="icons" />

				<img src={bell_icon} alt="bell-icon" className="icons" />

				<div className="navbar-profile">
					<img src={profileImg} alt="profile" className="profile" />

					<img src={caret_icon} alt="caret" />
					<ul className="nav-options">
						<li
							onClick={() => {
								navigate("/profile");
							}}>
							Switch Profiles
						</li>
						<li onClick={signOut}>Sign Out of Netflix</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

{
	/* ; */
}
