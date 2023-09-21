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
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <VersionControl />
            <Cloud />
            <Testing />
            <Other />
        </div>
    </section>
  )
}

export default Skills