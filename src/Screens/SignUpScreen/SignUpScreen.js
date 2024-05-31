/** @format */

import React from "react";
import "./signUp.css";

const SignUpScreen = () => {
	return (
		<div className="signup-screen">
			<form>
				<h1>Sign In</h1>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>
			</form>
		</div>
	);
};

export default SignUpScreen;
