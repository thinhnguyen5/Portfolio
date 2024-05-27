import React from 'react';
import Img from '../../assets/baber_shop.png';
import Img2 from '../../assets/keyloop.jpg';
import Img3 from '../../assets/Img3.png';
import Img4 from '../../assets/coffee_shop.png';
import "./project.css";

const Project = () => {
  return (
    <div className="project">
        <div className="project__navigator">
          <h1>Project</h1>
        </div>

        <div className="project__container">
          <div className="project__container-item">
            <img className="project__container-item-img" src={Img} alt="project" />
            <p>December 2021</p>
            <h3>Haircut Open Map</h3>
            <p>The project involves creating a website where clients may see the barber shops that are accessible in Finland. View the store's details and past customer feedback</p>
            <div className="source">
              <a href="https://github.com/prod-des-project-2021/group_1" target="_blank" rel="noreferrer">SOURCE CODE</a>
              <a className='source__deploy' href="https://haircutapp.netlify.app/" target="_blank" rel="noreferrer">DEPLOY</a>
            </div>
          </div>

          <div className="project__container-item">
            <img className="project__container-item-img" src={Img2} alt="project" />
            <p>Jan 2022-Sep 2022</p>
            <h3>Sample DMS</h3>
            <p>Building a Sample DMS is an internal service for developers and testers to test API platforms, using C#, .Net</p>
            <div className="source">
              <a href="https://github.com/prod-des-project-2021/group_1" target="_blank" rel="noreferrer">SOURCE CODE</a>
              <a className='source__deploy' href="" target="_blank" rel="noreferrer">DEPLOY</a>
            </div>
          </div>

          <div className="project__container-item">
            <img className="project__container-item-img" src={Img3} alt="project" />
            <p>Sep 2022-Dec 2022</p>
            <h3>T-shirt e-commerce</h3>
            <p>Make a T-shirt e-commerce web application with frontend and backend part. After everything has been built, deployed to Netlify</p>
            <div className="source">
              <a href="https://github.com/thinhnguyen5/E-commerce-Web-App" target="_blank" rel="noreferrer">SOURCE CODE</a>
              <a className='source__deploy' href="https://e-commerce-t-shirt-website.netlify.app/" target="_blank" rel="noreferrer">DEPLOY</a>
            </div>
          </div>

          <div className="project__container-item">
            <img className="project__container-item-img" src={Img4} alt="project" />
            <p>May 2021-Aug 2021</p>
            <h3>Coffee Shop</h3>
            <p>A project about a coffee website where there is a coffee menu and addresses of coffee shops in Hanoi Vietnam</p>
            <div className="source">
              <a href="https://github.com/thinhnguyen5/Summer-Project" target="_blank" rel="noreferrer">SOURCE CODE</a>
              <a className='source__deploy' href="https://www.youtube.com/watch?v=sMoYKo9IdDk" target="_blank" rel="noreferrer">DEPLOY</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project;