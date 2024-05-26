import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Project from './components/project/project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        {/* <About /> */}
        <Skills />
        <Services />
        <Qualification />
        {/* <Contact /> */}
        <Project />
        <Footer />
        <ScrollUp />
      </main>


    </>
  )
}

export default App