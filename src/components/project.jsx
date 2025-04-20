import React from 'react';
import { motion } from 'framer-motion';
import '../css/projects.css'; // Make sure to update the CSS file with the new styles
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const Projects = () => {
    const projectsData = [
        {
            title: 'Contentify - Full-Stack CMS',
            description:
                'A robust content management system built with the MERN stack, featuring secure authentication, rich-text editing, social sharing, and user engagement.',
            technologies: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'JWT', 'AWS'],
            githubLink: 'YOUR_CONTENTIFY_GITHUB_LINK',
            liveDemoLink: 'YOUR_CONTENTIFY_LIVE_DEMO_LINK',
            image: '/images/contentify-screenshot.png',
        },
        {
            title: 'Interactive Password Generator',
            description:
                'A user-friendly password generator crafted with React.js and styled with Tailwind CSS for responsiveness and a clean interface.',
            technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
            githubLink: 'YOUR_PASSWORD_GENERATOR_GITHUB_LINK',
            image: '/images/password-generator-screenshot.png',
        },
        {
            title: 'MVC URL Shortener',
            description:
                'A URL shortening service developed using the MVC pattern with Express.js, EJS, and MongoDB, including user authentication.',
            technologies: ['Express.js', 'EJS', 'MongoDB', 'MVC'],
            githubLink: 'YOUR_URL_SHORTENER_GITHUB_LINK',
            image: '/images/url-shortener-screenshot.png',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    return (
        <section id="projects" className="projects-section modern-projects">
            <h2>Projects</h2>
            <motion.div className="projects-grid-modern" variants={containerVariants} initial="hidden" animate="visible">
                {projectsData.map((project, index) => (
                    <motion.div key={index} className="project-card-modern" variants={projectVariants}>
                        {project.image && <div className="project-image"><img src={project.image} alt={project.title} /></div>}
                        <div className="project-info-modern">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="technologies-modern">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>
                            <div className="project-links-modern">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-button">
                                        <FaGithub className="icon" /> GitHub
                                    </a>
                                )}
                                {project.liveDemoLink && (
                                    <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="link-button live">
                                        <BiLinkExternal className="icon" /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;