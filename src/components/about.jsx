import React from 'react';
import { motion } from 'framer-motion';
import '../css/about.css';
import profileImage from '../profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faComments, faCloud, faDiagramProject, faPuzzlePiece, faRocket } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  // const aboutDetails = [
  //   {
  //     icon: faLaptopCode,
  //     title: 'Full-Stack Web Development',
  //     description: 'Specialized in the MERN stack to create dynamic, responsive, and secure applications with a focus on performance and user experience.',
  //   },
  //   {
  //     icon: faComments,
  //     title: 'Conversational AI & Chatbots',
  //     description: 'Skilled in building AI-powered chatbots for MS Teams and Slack using OpenAI, IBM Watson, and Azure Bot Framework.',
  //   },
  //   {
  //     icon: faCloud,
  //     title: 'Cloud & DevOps Enthusiast',
  //     description: 'Certified in AWS and Google Cloud, with hands-on experience deploying scalable solutions via AWS Elastic Beanstalk and S3.',
  //   },
  //   {
  //     icon: faDiagramProject,
  //     title: 'Project Ownership',
  //     description: 'Built and deployed full-fledged projects like Contentify, a rich blogging platform, and utilities like a URL Shortener and Password Generator.',
  //   },
  // ];
  const aboutDetails = [
    {
      icon: faLaptopCode,
      title: 'MERN Stack Mastery',
      description:
        'Built dynamic, full-stack applications using MongoDB, Express.js, React, and Node.js—optimized for performance, security, and user-centric design. Experience includes everything from REST APIs to frontend finesse.',
    },
    {
      icon: faComments,
      title: 'Conversational AI & Chatbots',
      description:
        'Architected intelligent chatbots using IBM Watson, Azure Bot Service, and OpenAI APIs. Delivered smart experiences on MS Teams and Slack with Adaptive Cards and Block Kit.',
    },
    {
      icon: faCloud,
      title: 'Cloud Deployment & Automation',
      description:
        'Certified in AWS and GCP. Proficient in deploying scalable apps on AWS Elastic Beanstalk, static sites on S3, and automating DevOps workflows using GitHub Actions.',
    },
    {
      icon: faDiagramProject,
      title: 'Project-Driven Mindset',
      description:
        'Created and maintained production-level projects like Contentify (blog platform), a custom URL Shortener, and a secure Password Generator. Focused on delivering complete product journeys—from idea to deployment.',
    },
    {
      icon: faPuzzlePiece,
      title: 'Enterprise Integration Skills',
      description:
        'Seamlessly integrated platforms like Salesforce, ServiceNow, and Nexthink into custom solutions. Experience working on real-time data sync, user authentication flows, and platform extensions.',
    },
    {
      icon: faRocket,
      title: 'Agile Execution & Ownership',
      description:
        'Worked in Agile and DevOps-based teams at HCL Software. Led modules independently, handled client-facing responsibilities, and practiced CI/CD with a “you build it, you own it” mindset.',
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
            Elevating Digital Platforms with Scalable & Smart Solutions
          </motion.h2>
          <motion.p className="intro-text" variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            I'm Chayan Jain, a Senior Software Engineer with a passion for engineering robust applications and driving innovation in the digital space. With deep expertise in MERN stack development and AI integrations, I craft scalable and intelligent solutions for real-world challenges.
          </motion.p>

          <motion.ul className="about-details-grid" variants={detailsVariants} initial="hidden" animate="visible">
            {aboutDetails.map((detail, index) => (
              <motion.li className="detail-item" key={index} variants={detailItemVariants}>
                <FontAwesomeIcon icon={detail.icon} className="detail-icon" />
                <h3>{detail.title}</h3>
                <p>{detail.description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p className="experience-summary" variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.7 }}>
            My journey at HCL Software and various personal projects have enabled me to design feature-rich applications, integrate third-party platforms like Salesforce and ServiceNow, and deliver seamless user experiences across platforms including MS Teams and Slack. I thrive in Agile environments and believe in the power of clean code and scalable architecture.
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
