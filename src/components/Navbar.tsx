import React, { useState } from 'react';
import '../styles/Navbar.css';
import { portfolioData } from '../helpers/constants';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name, navLinks } = portfolioData;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container container">
        <a href="/" className="nav-logo">{name}</a>
        
        {/* Mobile Menu Toggle */}
        <div 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} onClick={() => setIsMenuOpen(false)}>
              <a href={`#${link.path}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;