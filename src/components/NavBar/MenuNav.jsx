import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Planetbase from "../../assets/planetbase.svg";

function MenuNav() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <Link to="/" className="brand-name">
                <img src={Planetbase} alt="planetbase" />
            </Link>
            <button
                className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from Heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
            >
                <ul>
                    <li>
                        <Link to="/products" activeclassname="active">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/solutions" activeclassname="active">
                            Solutions
                        </Link>
                    </li>
                    <li>
                        <Link to="/resources" activeclassname="active">
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link to="/company" activeclassname="active">
                            Company
                        </Link>
                    </li>
                    <div>
                        <li className="login">
                            <Link to="/login" activeclassname="active">
                                Login
                            </Link>
                        </li>
                        <li>
                            <button className="loginBtnMobile">Create Events</button>
                        </li>
                    </div>
                </ul>
                <div className="createEvents">
                    <li>
                        <Link to="/login" activeclassname="active">
                            Login
                        </Link>
                    </li>
                    <button className="loginButton">Create Events</button>
                </div>
            </div>
        </nav>
    );
}

export default MenuNav;