import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="/books_logo.png" alt="Books Logo" className="navbar-logo" />
        </nav>
    );
};

export default Navbar;