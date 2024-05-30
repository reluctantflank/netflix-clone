/** @format */

import React from "react";
import "./banner.css";

const Banner = () => {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundImage:
					'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")',
			}}>
			<div className="banner-contents">
				<h1 className="banner-title">Movie Name</h1>
				<div className="banner-buttons">
					<button className="banner-button">Play</button>
					<button className="banner-button">My List</button>
				</div>
				<h1 className="banner-description">
					{truncate(`This is a test description This is a test description This is a test
					description This is a test description This is a test description This
					is a test description This is a test description v This is a test
					description v This is a test description This is a test description
					This is a test description This is a test description v This is a test
					description This is a test description`, 150)}
				</h1>
			</div>
			<div className="banner-fade-bottom" />
		</header>
	);
};

export default Banner;
