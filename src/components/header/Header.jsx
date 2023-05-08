import React, { useState } from 'react';
import './header.css';

const Header = () => {
    window.addEventListener('scroll', function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="navLogo">Thinh</a>

            <div className={Toggle ? "nav-menu show-menu" : "nav-menu" }>
                <ul className="navList grid">
                    <li className="navItem">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate navIcon"></i> Home
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user navIcon"></i> About
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file navIcon"></i> Skills
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt navIcon"></i> Projects
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery navIcon"></i> Qualification
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
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