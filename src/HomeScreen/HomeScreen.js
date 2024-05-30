/** @format */

import React from "react";
import "./homeScreen.css";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";

const HomeScreen = () => {
	return (
		<div className=" home-screen">
            <Navbar />
            <Banner/>
            
		</div>
	);
};

export default HomeScreen;
