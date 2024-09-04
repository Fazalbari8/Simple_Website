import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Car Dealership</Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/About" onClick={toggleMenu}>About</Link>
          <Link to="/Inventery" onClick={toggleMenu}>Inventery</Link>
          <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/Shopnow" onClick={toggleMenu}>Shopnow</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
