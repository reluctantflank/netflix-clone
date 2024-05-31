/** @format */

import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";

function App() {
	const user = null;

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route
						exact
						path="/login"
						element={user ? <HomeScreen /> : <Login />}
					/>
					<Route exact path="/" element={user ? <HomeScreen /> : <Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
