import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
    };

    return (
        <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">Blog Logo</Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/listpost" className="nav-link">
                        List Posts
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="nav-link theme-toggle"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
