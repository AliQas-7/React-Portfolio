import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${menuOpen ? 'open' : ''}`}>
        <a className="navbar-brand" href="/">QashInCode</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Skills" className="nav-link" onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link" onClick={closeMenu}>
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://drive.google.com/file/d/1pzYKJWroEDv4USKVUvQhOCpbvqEDOW1Q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
                onClick={closeMenu}
              >
                Download Resume
              </a>
            </li>
            <li className="nav-item">
              <Link to="/ContactUs" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;