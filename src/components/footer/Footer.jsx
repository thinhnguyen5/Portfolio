import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Thinh</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about"
                    className='footer__link'>About</a>
                </li>

                <li>
                    <a href="#portfolio"
                    className='footer__link'>Project</a>
                </li>

                <li>
                    <a href="#qualification"
                    className='footer__link'>Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/th1nh.n/" className="footer__social-link" target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/thinh-nguyen-165a28240/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/thinhnguyen5" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; All rights reserved
            </span>
        </div>

    </footer>
  )
}

export default Footer