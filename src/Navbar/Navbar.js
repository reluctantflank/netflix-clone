/** @format */

import React, { useEffect, useState } from "react";
import "./navbar.css";

const Navbar = () => {

    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
			<div className="nav-content">
				<img
					className="nav-logo"
					src="/images/nav-logo.png"
					alt="netflix-logo"
				/>
				<img
					className="nav-avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="avatar-logo"
				/>
			</div>
		</div>
	);
};

export default Navbar;
