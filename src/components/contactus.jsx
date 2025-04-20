import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../css/contactus.css'; // Create this CSS file
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            // Replace with your actual email sending endpoint
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send message. Please try again later.');
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.3 } },
    };

    const infoVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut', delay: 0.5 } },
    };

    return (
        <section className="contact-us modern" id="contact">
            <motion.div className="contact-container" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div className="contact-info" variants={infoVariants}>
                    <h2>Let's Connect!</h2>
                    <p>Feel free to reach out for collaborations, opportunities, or just a friendly hello.</p>
                    <div className="info-item">
                        <MdEmail className="icon" />
                        <p><a href={`mailto:${'twinklechayan@gmail.com'}`}>twinklechayan@gmail.com</a></p>
                    </div>
                    <div className="info-item">
                        <MdLocationOn className="icon" />
                        <p>Noida, Uttar Pradesh, India</p>
                    </div>
                    <div className="info-item">
                        <MdPhone className="icon" />
                        <p><a href={`tel:${'+917247544288'}`}>+91 7247544288</a></p>
                    </div>
                    {/* You can add links to your social media profiles here */}
                </motion.div>

                <motion.form className="contact-form" onSubmit={handleSubmit} variants={formVariants}>
                    <h2>Send me a message</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="5" required></textarea>
                    </div>
                    <button type="submit" disabled={status === 'Sending...'}>{status || 'Send Message'}</button>
                </motion.form>
            </motion.div>
        </section>
    );
};

export default ContactUs;