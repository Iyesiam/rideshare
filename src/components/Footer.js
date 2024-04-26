import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExclamationCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <FontAwesomeIcon icon={faHeart} className="footer-icon" />
                <FontAwesomeIcon icon={faExclamationCircle} className="footer-icon" />
                <FontAwesomeIcon icon={faBell} className="footer-icon" />
            </div>
        </footer>
    );
}

export default Footer;
