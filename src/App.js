import React from 'react';
import { Element } from 'react-scroll';
import MyNavbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skill';
import Project from './components/project';
import Experience from './components/experience'; // Import the new Experience component
// import Contact from './componen
import ContactUs from './components/contactus';
import './App.css';
import Certifications from './components/cerification';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            {/* Navbar */}
            <MyNavbar />

            {/* Hero Section (intro/landing) */}
            <Element name="home" className="element">
                <Hero />
            </Element>

            {/* About Section */}
            <Element name="about" className="element">
                <About />
            </Element>

            {/* Experience Section */}
            <Element name="experience" className="element">
                <Experience />
            </Element>

            {/* Skills Section */}
            <Element name="skills" className="element">
                <Skills />
            </Element>

            {/* Projects Section */}
            <Element name="projects" className="element">
                <Project />
            </Element>

            {/* Contact Section */}
            <Element name="certificate" className="element">
                <Certifications />
            </Element>

            <Element name="contact" className="element">
                <ContactUs />
            </Element>
            <Element name="footer" className="element">
                <Footer />
            </Element>

        </div>
    );
}

export default App;