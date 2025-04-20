import React from 'react';
import { motion } from 'framer-motion';
import '../css/skill.css';
// import skillData from './skillData'; // Assuming you have a separate file for skill data
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaNpm,
    FaDocker,
} from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiBootstrap, SiExpress } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { MdChatBubbleOutline } from 'react-icons/md';
import { FaTeamspeak, FaSlack } from 'react-icons/fa';

const Skills = () => {
    const skillsData = [
        {
          category: 'Frontend',
          skills: [
            { name: 'HTML5', icon: FaHtml5 },
            { name: 'CSS3', icon: FaCss3Alt },
            { name: 'JavaScript', icon: FaJsSquare },
            { name: 'React.js', icon: FaReact },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
            { name: 'Bootstrap', icon: SiBootstrap },
            { name: 'EJS' },
            { name: 'Adaptive Cards' },
            { name: 'Blockit' }
          ]
        },
        {
          category: 'Backend',
          skills: [
            { name: 'Node.js', icon: FaNodeJs },
            { name: 'Express.js', icon: SiExpress },
            { name: 'RESTful APIs', icon: TbApi },
            { name: 'Python' }
          ]
        },
        {
          category: 'Database',
          skills: [
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'SQL', icon: FaDatabase }
          ]
        },
        {
          category: 'AI & Bot Development',
          skills: [
            { name: 'Dialogflow', icon: MdChatBubbleOutline },
            { name: 'IBM Watson Assistant', icon: MdChatBubbleOutline },
            { name: 'Azure Bot Framework', icon: MdChatBubbleOutline }
          ]
        },
        {
          category: 'Tools & Platforms',
          skills: [
            { name: 'Git', icon: FaGitAlt },
            { name: 'GitHub', icon: FaGitAlt },
            { name: 'Postman' },
            { name: 'Docker', icon: FaDocker },
            { name: 'VS Code' },
            { name: 'JIRA' },
            { name: 'ServiceNow' },
            { name: 'NPM', icon: FaNpm }
          ]
        },
        {
          category: 'Collaboration Platforms',
          skills: [
            { name: 'MS Teams', icon: FaTeamspeak },
            { name: 'Slack', icon: FaSlack }
          ]
        },
        {
          category: 'Others',
          skills: [
            { name: 'Problem-Solving' },
            { name: 'Adaptability' },
            { name: 'Time Management' },
            { name: 'Project Planning' },
            { name: 'Collaboration' },
            { name: 'Teamwork' },
            { name: 'Attention to Detail' },
            { name: 'Analytical Thinking' },
            { name: 'Agile & Scrum' },
            { name: 'Continuous Improvement' },
            { name: 'Service Delivery' }
          ]
        }
      ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const categoryVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
    };

    return (
        <section className="skills" id="skills">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Skills
            </motion.h2>
            <motion.div className="skills-container" variants={containerVariants} initial="hidden" animate="visible">
                {skillsData.map((categoryItem, index) => (
                    <motion.div className="skills-category" key={index} variants={categoryVariants}>
                        <h3>{categoryItem.category}</h3>
                        <div className="skills-list">
                            {categoryItem.skills.map((skill, skillIndex) => (
                                <motion.div className="skill-item" key={skillIndex} variants={skillVariants}>
                                    {skill.icon && <span className="skill-icon">{<skill.icon size={24} />}</span>}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;