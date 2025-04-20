import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            className="footer modern-v2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="footer-content-modern">
                    <ul className="footer-social-links-modern">
                        <li><a href="https://github.com/Chayan2" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/chayan-j-889b0a193" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                        <li><a href="https://twitter.com/ChayanJ" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
                        <li><a href="https://www.instagram.com/chayan.j" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
                    </ul>
                    <p className="footer-copyright-modern">© 2025 Chayan Jain. All rights reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;