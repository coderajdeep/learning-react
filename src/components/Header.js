import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { LOGIN, LOGOUT } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    console.log('Header')
    const [isLoggedIn, doLogin] = useState(true)
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={LOGO_URL} alt="logo" className="logo" />
                </Link>
                {/* <a href="/"><img src={LOGO_URL} alt="logo" className="logo" /></a> */}
                
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
                <button className="loginBtn" onClick={() => {
                    doLogin(!isLoggedIn)
                }}>{isLoggedIn ? LOGIN : LOGOUT}</button>
            </div>
        </div>
    )
};

export default Header;