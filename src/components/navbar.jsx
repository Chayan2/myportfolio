import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';
import '../App.css'; // or './MyNavbar.css'

function MyNavbar() {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="navbar-container">
          <div className="navbar-left">
            <Navbar.Brand href="#home" className="brand">
              👨‍💻 Chayan Jain
            </Navbar.Brand>
          </div>

          <Nav className="navbar-center nav-links">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                style={{ display: 'inline-block' }}
              >
                <Nav.Link href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </Nav.Link>
              </motion.div>
            ))}
          </Nav>

          <div className="navbar-right">
            <motion.span
              className="portfolio-animated"
              animate={{ x: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut'
              }}
            >
              Portfolio
            </motion.span>
          </div>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default MyNavbar;
