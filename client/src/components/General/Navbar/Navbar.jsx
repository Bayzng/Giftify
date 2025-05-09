import React, { useState } from 'react';
import logo from "../../../../assets/logo2.png"
import "./Navbar.css"

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="#" className="brand"><img src={logo} alt="" /></a>

        <div className="animated-text">
          <h2>Welcome to Giftify</h2>
        </div>

        <div className={`menu ${menuActive ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner">
            {['Listing', 'Feature', 'Popular', 'Support'].map((item, idx) => (
              <li key={idx} className="menu-item">
                <a href="#" className="menu-link" onClick={closeMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`burger ${menuActive ? 'is-active' : ''}`}
          id="burger"
          onClick={toggleMenu}
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
