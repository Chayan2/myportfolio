import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';  // Import react-scroll Link
import '../css/navbar.css';
import ProfileLink from './ProfileLink';

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certificate', 'contact'];

const MyNavbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar
            expand="lg"
            fixed="top"
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
            collapseOnSelect
        >
            <Container className="navbar-container">
                <Navbar.Brand href="#home" className="brand">
                    <motion.span
                        className="portfolio-animated"
                        animate={{ rotate: [0, 1, -1, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    >
                        Portfolio
                    </motion.span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="navbar-center nav-links">
                        {sections.map((item, index) => {
                            const sectionId = item;
                            const sectionName = item.charAt(0).toUpperCase() + item.slice(1);

                            return (
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    key={index}
                                    style={{ display: 'inline-block' }}
                                >
                                    {/* Using Link component from react-scroll */}
                                    <Link
                                        to={sectionId}  // Targeting sections by their `name` prop
                                        smooth={true}   // Smooth scrolling
                                        offset={-70}    // Adjust for navbar height if needed
                                        duration={500}  // Adjust scroll duration
                                        className={`nav-link ${activeSection === sectionId ? 'active-link' : ''}`}
                                    >
                                        {sectionName}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </Nav>
                    <Nav className="navbar-right">
                        <ProfileLink />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
