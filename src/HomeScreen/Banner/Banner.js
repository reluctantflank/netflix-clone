/** @format */

import React, { useEffect, useState } from "react";
import "./banner.css";
import requests from "../../Requests/Requests";
import axios from "../../axios/Axios";

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results?.length - 1)
				]
			);
			return requests;
		}
		fetchData();
	}, []);

	console.log(movie);

	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}>
			<div className="banner-contents">
				<h1 className="banner-title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner-buttons">
					<button className="banner-button">Play</button>
					<button className="banner-button">My List</button>
				</div>
				<h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
			</div>
			<div className="banner-fade-bottom" />
		</header>
	);
};

export default Banner;
