/** @format */

import React, { useState } from "react";
import "./login.css";
import SignUpScreen from "../SignUpScreen/SignUpScreen";

const Login = () => {
	const [signIn, setSignIn] = useState(false);
	return (
		<div className="login-screen">
			<div className="login-screen-background">
				<img
					src="/images/netflix.png"
					alt="netflix-logo"
					className="login-screen-logo"
				/>
				<button className="login-screen-button" onClick={() => setSignIn(true)}>
					Sign In
				</button>

				<div className="login-screen-gradient" />
			</div>
			<div className="login-screen-body">
				{signIn ? (
					<SignUpScreen />
				) : (
					<div className="login-screen-body">
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel at any time</h2>
						<h3>
							Ready to watch? Enter your email to create or restart you
							membership.
						</h3>
						<div className="login-screen-input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									onClick={() => setSignIn(true)}
									className="login-screen-get-started-button">
									GET STARTED
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Login;
