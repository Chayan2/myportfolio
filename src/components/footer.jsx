import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer-modern-glow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}
    >
      <div className="footer-container">
        <h4>Designed & Built by Chayan Jain 🚀</h4>
        <span>
          <a href="https://github.com/Chayan2" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/chayan-j-889b0a193" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/ChayanJ" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/chayan.j" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </span>
        <p>© {new Date().getFullYear()} Chayan Jain. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;