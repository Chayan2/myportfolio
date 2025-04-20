import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';
import '../css/navbar.css';

const sections = ['home', 'projects', 'skills', 'about', 'contact'];

const MyNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar expand="lg" className="custom-navbar" fixed="top" collapseOnSelect>
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="brand">
            <motion.span
              className="portfolio-animated"
              animate={{ x: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              Portfolio
            </motion.span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="navbar-center nav-links ms-auto">
              {sections.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  key={index}
                  style={{ display: 'inline-block' }}
                >
                  <Nav.Link
                    href={`#${item}`}
                    className={`nav-link ${activeSection === item ? 'active-link' : ''}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default MyNavbar;
