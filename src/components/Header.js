import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="hamburger-menu">&#9776;</div>
                <h1 className="logo">Startup</h1>
            </div>
        </header>
    );
}

export default Header;
