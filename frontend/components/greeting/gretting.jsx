import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    // const navBar = () => (
        
    // );

    const sessionLinks = () => (
        <nav className="login-signup"> 
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
            <Link to="/signup">Sign Up</Link>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}! </h2>
            <button className="header-button" onClick={logout}>Log Out</button>
            
            <div className="nav-bar-container">
                <img src="/assets/StreetX.png" className="street-x-logo" />
                <nav className="nav-bar">
                    <ul>
                        <li><a href="#">Browse</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </nav>
            </div>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting