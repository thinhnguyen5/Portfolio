import React, { useState } from 'react';
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
   <section className="services section" id="services">
        <h2 className="section__title">Projects</h2>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">HAIRCUT OPEN MAP</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Haircut Open Map</h3>
                        <p
                        className='services__modal-description'>The project involves creating a website where clients may
                        see the barber shops that are accessible in Finland. View the store's details and
                        past customer feedback
                        </p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Human Resources: Small team (5 members), one designer, three engineers,
                                    including one team lead dedicated to DevOps, CI/CD, and architecture. I have
                                    worked on the back-end part.

                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Responsibilities:
                                    Design database schema and implement back-end services
                                    Developing API for the item, rate, and user.
                                    Collaborate with the team leader to define and improve the team’s workflow,
                                    which
                                    decreases 40% time to deploy new functionality and reduces bugs related to
                                    configuration

                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Technologies: ReactJS, Typescript, AG-grid, ExpressJS, Mongoose, Netlify, Heroku 20.
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Github: <a href='https://github.com/prod-des-project-2021/group_1'>https://github.com/prod-des-project-2021/group_1</a>
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Deploy: <a href='https://haircutapp.netlify.app/'>https://haircutapp.netlify.app/</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">SAMPLE DMS</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Backend Developer</h3>
                        <p
                        className='services__modal-description'>
                            Sample DMS is an internal service for developers and
                            testers to test API platforms. It mimics an actual DMS backend but does not have
                            any business functionality. Currently, the sample DMS is API-driven and does not
                            have a UI. <br/> This project aims to improve the user experience so that users can do basic
                            operations on the Sample DMS via a UI (e.g. create, update, update and delete
                            entities).
                        </p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Responsibilities: I worked at Keyloop Company as an intern web developer for
                                    about ten months. I mostly worked on the backend using programming languages
                                    such as C#,.Net, Node.js, and DynamoDB.

                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Human Resources: 3 members

                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                Technologies consist of Javascript/ Typescript, HTML/CSS, React, NodeJs, C#,
                                .Net and Material UI.

                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">THESIS PROJECT</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Thesis Project</h3>
                        <p
                        className='services__modal-description'>Make a T-shirt e-commerce web application with frontend and backend part. After everything has been built, deployed to Netlify</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Human Resources: 1 member
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Responsibility: In this thesis, the T-shirt E-commerce site was built to provide customers with various T-shirts for purchase. In order to facilitate online purchases, a shop-ping cart was provided for users. The T-shirt  web application did not have the back-end and front-end parts. This thesis project aimed to improve the user experience so customers can do basic operations for T-shirt e-commerce stores via a UI.
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Technologies used in this project included React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Postman and Visual Studio Code.
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Github: <a href= 'https://github.com/thinhnguyen5/E-commerce-Web-App'>https://github.com/thinhnguyen5/E-commerce-Web-App</a> <br /> <a href= 'https://github.com/thinhnguyen5/E-Commerce-Web-App-Api.git'>https://github.com/thinhnguyen5/E-Commerce-Web-App-Api.git</a>
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Deploy: <a href= 'https://e-commerce-t-shirt-website.netlify.app/'>https://e-commerce-t-shirt-website.netlify.app/</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">SUMMER PROJECT</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(4)}>View More
                    <i className="uil uil-arrow-right
                    services__button-icon"></i>
                </span>

                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Coffee Store</h3>
                        <p
                        className='services__modal-description'>A project about a coffee website where there is a coffee menu and addresses of coffee shops in Hanoi Vietnam</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Human Resources: 1 member
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Responsibility: Write an API for the coffee menu that includes basic information about a drink and authentication for users. Connect client side and server side and interface functions.
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Technologies used in this project included React.js, NodeJS, ExpressJS, Mongoose.
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Github: <a href= 'https://github.com/thinhnguyen5/Summer-Project'>https://github.com/thinhnguyen5/Summer-Project</a> <br /> 
                                            <a href= 'https://github.com/thinhnguyen5/coffeeApi'>https://github.com/thinhnguyen5/coffeeApi</a>
                                </p>
                            </li>

                            <li className='services__modal-service'>
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className='services__modal-info'>
                                    Demo Video: <a href= 'https://www.youtube.com/watch?v=sMoYKo9IdDk'>https://www.youtube.com/watch?v=sMoYKo9IdDk</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Services