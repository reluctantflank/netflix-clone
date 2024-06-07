/** @format */

import React, { useContext } from "react";
import "./profileScreen.css";
import Navbar from "../../Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { ProfileImageContext } from "../../context/ProfileImageContext";
import HomeScreen from "../../HomeScreen/HomeScreen";

const profiles = [
	{
		name: "Sam",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYA6ZG7qVVpXnqq7_5LJ_Ezs-Wr-VSQiSSA&s",
	},
	{
		name: "Honey",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLO7XSN_taND9qG586sXzN9LtnGir6w8TEOmrKcj86fDOLVmv2FlMy5EyEW0pXNx--pE&usqp=CAU",
	},
	{
		name: "Amaan",
		img: "https://i.pinimg.com/474x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg",
	},
	{
		name: "Roohansh",
		img: "https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg",
	},
	// {
	// 	name: "Children",
	// 	img: "https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg",
	// },
];

const ProfileScreen = () => {
	const navigate = useNavigate();
	const user = useSelector(selectUser);
	const { setProfileImg } = useContext(ProfileImageContext);

	const handleProfileClick = (profile) => {
		setProfileImg(profile.img);
		navigate("/home");
	};

	return (
		<div className="profile-screen">
			<div className="container">
				<h1 className="title">Who's watching?</h1>
				<div className="profiles">
					{profiles.map((profile, index) => (
						<div
							onClick={() => {
								handleProfileClick(profile);
							}}
							key={index}
							className="profile">
							<img
								src={profile.img}
								alt={profile.name}
								className="profile-img"
							/>
							<p className="profile-name">{profile.name}</p>
						</div>
					))}
				</div>
				<button className="manage-button">Manage Profiles</button>
			</div>
			;
		</div>
	);
};
export default ProfileScreen;
