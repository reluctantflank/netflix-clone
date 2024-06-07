/** @format */

import React from "react";
import "./homeScreen.css";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "../Requests/Requests";

const HomeScreen = () => {
	
	return (
		<div className=" home-screen">
			<Navbar />

			<Banner />

			<Row
				title="NETFLIX ORIGINALS"
				fetchURL={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
};

export default HomeScreen;
