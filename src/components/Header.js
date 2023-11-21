import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { LOGIN, LOGOUT } from "../utils/constants";

const Header = () => {
    let [isLoggedIn, doLogin] = useState(false)
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button className="loginBtn" onClick={() => {
                    doLogin(!isLoggedIn)
                }}>{isLoggedIn ? LOGIN : LOGOUT}</button>
            </div>
        </div>
    )
};

export default Header;