import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Gmail</h3>
                        <span className="contact__card-data">nguyenducthinh05072000@gmail.com</span>

                        <a href="" className="contact__button">Write me{" "} 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin contact__card-icon"></i>
                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">Thinh Nguyen</span>

                        <a href="https://www.linkedin.com/in/thinh-nguyen-165a28240/" className="contact__button">Write me{" "} 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>
                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">th1ng.n</span>

                        <a href="https://www.instagram.com/th1nh.n/" className="contact__button">Write me{" "} 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact