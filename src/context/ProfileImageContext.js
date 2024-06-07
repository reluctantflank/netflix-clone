/** @format */

import { createContext, useState } from "react";

const ProfileImageContext = createContext();

const ProfileImageProvider = ({ children }) => {
	const [profileImg, setProfileImg] = useState("");

	return (
		<ProfileImageContext.Provider value={{ profileImg, setProfileImg }}>
			{children}
		</ProfileImageContext.Provider>
	);
};

export { ProfileImageProvider, ProfileImageContext };
