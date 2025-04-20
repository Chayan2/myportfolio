import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';
import '../css/navbar.css';
import ProfileLink from './ProfileLink'; // Import the ProfileLink component

const sections = ['home', 'projects', 'skills', 'about', 'contact'];

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
                        {sections.map((item, index) => (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
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
                    <Nav className="navbar-right"> {/* Added a navbar-right class */}
                        <ProfileLink />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;