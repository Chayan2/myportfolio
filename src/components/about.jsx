import React from 'react';
import { motion } from 'framer-motion';
import '../css/about.css'; // Import the updated styles
import profileImage from '../profile.jpg'; // Replace with your actual profile image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBrain, faPuzzlePiece, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const aboutDetails = [
    {
      icon: faCode,
      title: 'MERN Stack Expertise',
      description: 'Deeply experienced in building scalable and high-performance web applications leveraging MongoDB, Express.js, Node.js, and React.js.',
    },
    {
      icon: faBrain,
      title: 'AI & Chatbot Innovation',
      description: 'Passionate about creating intelligent interfaces using IBM Watson, Azure Bot Framework, and OpenAI Vertex AI to deliver enhanced user experiences.',
    },
    {
      icon: faPuzzlePiece,
      title: 'Integration Prowess',
      description: 'Proven ability to seamlessly integrate third-party services like Salesforce, ServiceNow, and Nexthink to expand platform capabilities.',
    },
    {
      icon: faRocket,
      title: 'Solution-Oriented Development',
      description: 'Focused on developing effective solutions for platforms such as MS Teams and Slack, utilizing technologies like Adaptive Cards and Blockit.',
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeInOut', delay: 0.2 } },
  };

  const detailsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, delay: 0.5 } },
  };

  const detailItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about modern" id="about">
      <div className="about-container">
        {/* Text and Details Section */}
        <div className="about-content">
          <motion.h2 className="section-title" variants={textVariants} initial="hidden" animate="visible">
            Crafting Digital Experiences & Intelligent Solutions
          </motion.h2>
          <motion.p className="intro-text" variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            A Senior Software Engineer driven by a passion for building robust, scalable, and intelligent applications. My journey has been shaped by a deep dive into the MERN stack and the transformative power of AI.
          </motion.p>

          <motion.ul className="about-details" variants={detailsVariants} initial="hidden" animate="visible">
            {aboutDetails.map((detail, index) => (
              <motion.li className="detail-item" key={index} variants={detailItemVariants}>
                <FontAwesomeIcon icon={detail.icon} className="detail-icon" />
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p className="experience-summary" variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
            With a strong foundation in backend and frontend development, I've contributed to enhancing platforms through seamless third-party integrations and the creation of AI-powered chatbots. My experience at HCL Software has honed my skills in building client-focused solutions for diverse platforms.
          </motion.p>
        </div>

        {/* Profile Image Section */}
        <motion.div
          className="profile-image-container"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img src={profileImage} alt="Chayan Jain" className="profile-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;