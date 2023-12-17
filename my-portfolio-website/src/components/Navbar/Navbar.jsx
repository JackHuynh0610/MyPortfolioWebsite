// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import homeLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/homeIcon.svg";
import aboutLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/infoIcon.svg";
import contactLogo from "/MyPortfolioWebsite/my-portfolio-website/src/assets/icons/mailIcon.svg";
import "./Navbar.css";

function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <div className="header">
      <nav className="navbar">
        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuVisible ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${menuVisible ? 'show' : ''}`}>
          <li>
            <a href="/" className="home-link">
              <img src={homeLogo} alt="homeLogo" className="homeLogo" />
            </a>
          </li>
          <li>
            <a href="/" className="about-link">
              <img src={aboutLogo} alt="aboutLogo" className="aboutLogo" />
            </a>
          </li>
          <li>
            <a href="/" className="contact-link">
              <img
                src={contactLogo}
                alt="contactLogo"
                className="contactLogo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;