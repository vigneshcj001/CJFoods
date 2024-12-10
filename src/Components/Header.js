import React from "react";
import CJLOGO from '../../images/logo.png'; 
import './HeaderStyles.css'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CJLOGO} alt="CJ logo" />
            </div>
            <div className="nav-bar-container">
                <ul className="nav-items" role="navigation">
                    <li key="home">Home</li>
                    <li key="about">About Us</li>
                    <li key="contact">Contact Us</li>
                    <li key="cart">Cart</li>
                    <li key="login" className="login-btn">Login</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
