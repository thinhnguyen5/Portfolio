import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import VersionControl from './VersionControl';
import Cloud from './Cloud';
import Testing from './Testing';
import Other from './Other';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <VersionControl />
            <Cloud />
            <Testing />
            <Other />
            
            <div className="skills__icon-container">
              <img src="https://img.icons8.com/color/48/000000/javascript.png" 
                   alt="javascript">
              </img>

              <img src="https://img.icons8.com/color/48/000000/react-native.png" 
                   alt="reactjs">
              </img>

              <img src="https://img.icons8.com/color/48/000000/html-5.png" 
                   alt="html">
              </img>

              <img src="https://img.icons8.com/color/48/000000/css3.png" 
                   alt="css">
              </img>

              <img src="https://img.icons8.com/color/48/000000/nodejs.png" 
                   alt="nodejs">
              </img>

              <img src="https://img.icons8.com/color/48/000000/mongodb.png" 
                   alt="mongodb">
              </img>

              <img src="https://img.icons8.com/color/48/000000/postgreesql.png" 
                   alt="postgreesql">
              </img>

              <img src="https://img.icons8.com/fluent/48/000000/github.png" 
                   alt="github">
              </img>

              <img src="https://img.icons8.com/color/48/000000/firebase.png" 
                   alt="firebase">
              </img>

              <img src="https://img.icons8.com/color/48/000000/jira.png" 
                   alt="jira">
              </img>

              <img src="https://img.icons8.com/color/48/000000/redux.png" 
                   alt="redux">
              </img>
            </div>
        </div>
    </section>
  )
}

export default Skills