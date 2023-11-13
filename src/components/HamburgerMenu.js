import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation, i18n } from 'react-i18next'; // Import useTranslation and i18n
import '../styles/hamburgerMenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility
  const { t, i18n } = useTranslation(); // Use translation function and i18n

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the language
  const toggleLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
    toggleMenu(); // Close the menu when language is toggled
  };
  const languageSwitcherText = i18n.language === 'en' ? 'Es/En' : 'En/Es';
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-button" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/schedule-standings" onClick={toggleMenu}>Schedule & Standings</NavLink></li>
          <li><NavLink to="/registrations" onClick={toggleMenu}>Registrations</NavLink></li>
          <li><NavLink to="/divisions" onClick={toggleMenu}>Divisions</NavLink></li>
          <li><NavLink to="/media" onClick={toggleMenu}>Media</NavLink></li>
          <li><NavLink to="/about-contact" onClick={toggleMenu}>About & Contact</NavLink></li>
          <li onClick={toggleLanguage}>{languageSwitcherText}</li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;



