import React from 'react';
import { motion } from 'framer-motion';
import '../css/certification.css';

const certifications = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: 'Issued: Dec 2023',
        link: 'https://www.credly.com/badges/your-aws-badge-id', // Replace with real Credly link
    },
    {
        title: 'Cloud Digital Leader Certification',
        issuer: 'Google Cloud',
        date: 'Issued: Jul 2024',
        link: 'https://www.credly.com/badges/your-google-cloud-badge-id', // Replace with real Credly link
    },
    {
        title: 'ITIL V3 Exam Mentor Course',
        issuer: 'O\'Reilly Media',
        link: 'https://www.credly.com/badges/your-itil-badge-id', // Replace with real Credly link
    }
];

const Certifications = () => {
    return (
        <section className="certifications" id="certifications">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Certifications
            </motion.h2>
            <motion.div
                className="certification-cards"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } },
                    hidden: {}
                }}
            >
                {certifications.map((cert, index) => (
                    <motion.div
                        className="cert-card"
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        }}
                    >
                        <h3>{cert.title}</h3>
                        <p>{cert.issuer}</p>
                        {cert.date && <p className="cert-date">{cert.date}</p>}
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">View on Credly</a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Certifications;
