import React from 'react';
import { motion } from 'framer-motion';
import '../css/certification.css';

const certifications = [
    {
        title: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: 'Issued: Dec 2023',
        link: 'https://www.credly.com/users/chayan-jain-51',
    },
    {
        title: 'Cloud Digital Leader Certification',
        issuer: 'Google Cloud',
        date: 'Issued: Jul 2024',
        link: 'https://www.credly.com/users/chayan-jain-51',
    },
    {
        title: 'ITIL V3 Exam Mentor Course',
        issuer: 'O\'Reilly Media',
        link: 'https://www.credly.com/users/chayan-jain-51',
    },
    {
        title: 'Problem Solving (Basic) Certificate',
        issuer: 'HackerRank',
        date: 'Issued: 2022',
        link: 'https://www.hackerrank.com/certificates/abaa78261efd',
    },
    {
        title: 'Python',
        issuer: 'HackerRank',
        date: 'Issued: 2022',
        link: 'https://www.hackerrank.com/certificates/iframe/4a5a49b56904',
    },
    {
        title: 'Postman API Fundamentals Student Expert',
        issuer: 'Postman',
        date: 'Issued: 2024',
        link: 'https://api.badgr.io/public/assertions/u5WjdtCPTAuoimdl_6U5Ig', // Corrected link
    },
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
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">View Credential</a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Certifications;
