/** @format */

import React, { useRef } from "react";
import "./signUp.css";
import { auth } from "../../firebase/firebase";

const SignUpScreen = () => {
	const emailRef = useRef(null);
	const passworRef = useRef(null);
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passworRef.current.value
			)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(
			emailRef.current.value,
			passworRef.current.value
		).then((authUser) => {
			console.log(authUser);
		}).catch((error) =>{
			alert(error.message);
		})


	};

	return (
		<div className="signup-screen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passworRef} type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signup-screen-gray">New to Netflix? </span>
					<span className="signup-screen-link" onClick={register}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
};

export default SignUpScreen;
