/** @format */

import React from "react";
import "./profileScreen.css";
import Navbar from "../../Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase/firebase";

const ProfileScreen = () => {
	const user = useSelector(selectUser);
	return (
		<div className="profile-screen">
			<Navbar />
			<div className="profile-screen-body">
				<h1>Edit Profile</h1>
				<div className="profile-screen-info">
					<img
						className=""
						src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						alt="avatar-logo"
					/>
					<div className="profile-screen-details">
						<h2>{user.email}</h2>
						<div className="profile-screen-plans">
							<h3>Plans</h3>
							<button
								onClick={() => {
									auth.signOut();
								}}
								className="profile-screen-sign-out">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
