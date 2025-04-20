import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import '../css/hero.css';

const Hero = () => {
    const googleDriveResumeLink = 'https://drive.google.com/file/d/1q8sh91tZQBBDTjFadDtKdS09ZYKpqMOD/view?usp=sharing';

    // Function to generate a direct download link for Google Drive
    const getDirectDownloadLink = (driveUrl) => {
        const parts = driveUrl.split('/');
        const fileId = parts[parts.indexOf('d') + 1];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    };

    const directDownloadLink = getDirectDownloadLink(googleDriveResumeLink);

    return (
        <div className="hero" id="home">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Hi, I'm <span className="highlight">Chayan</span>
                </motion.h1>

                <motion.h2
                    className="typed-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <ReactTyped
                        strings={[
                            "I'm a Backend Developer",
                            "I'm a Full-Stack Developer",
                            "I'm a MERN Stack Engineer",
                            "I'm a Problem Solver",
                            "I'm Node-js Devloper",
                            "I'm React-js Devloper",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    />
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    I build beautiful, responsive websites that bring ideas to life.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <a href="#projects" className="btn primary">
                        View Projects
                    </a>
                    <a
                        href={directDownloadLink}
                        download="Chayan_Jain_Resume.pdf" // Suggests a filename
                        className="btn secondary"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;