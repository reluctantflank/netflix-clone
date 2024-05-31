/** @format */

import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout);
			}
		});

		return unsubscribe;
	}, []);

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
