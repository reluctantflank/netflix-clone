/** @format */

import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Screens/Login/Login";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/user/userSlice";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

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
				dispatch(logout());
			}
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				<Routes>
					<Route
						exact
						path="/login"
						element={user ? <ProfileScreen /> : <Login />}
					/>
					<Route
						exact
						path="/profile"
						element={user ? <ProfileScreen /> : <Login />}
					/>

					<Route
						exact
						path="/"
						element={user ? <ProfileScreen /> : <Login />}
					/>
					<Route path="/home" element={<HomeScreen />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
