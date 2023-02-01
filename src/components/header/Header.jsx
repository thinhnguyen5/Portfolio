import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="navLogo">Thinh</a>

            <div className={Toggle ? "navMenu show-menu" : "navMenu" }>
                <ul className="navList grid">
                    <li className="navItem">
                        <a href="#home" className="navLink activeLink">
                            <i className="uil uil-estate navIcon"></i> Home
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#about" className="navLink">
                            <i className="uil uil-user navIcon"></i> About
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#skills" className="navLink">
                            <i className="uil uil-file navIcon"></i> Skills
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="services" className="navLink">
                            <i className="uil uil-briefcase-alt navIcon"></i> Services
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#portfolio" className="navLink">
                            <i className="uil uil-scenery navIcon"></i> Portfolio
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" className="navLink">
                            <i className="uil uil-message navIcon"></i> Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times navClose" onClick={() => showMenu(!Toggle)}></i>
            </div>
            
            <div className="navToggle" onClick={() => showMenu
            (!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header