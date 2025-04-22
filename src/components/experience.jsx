import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';
import '../css/experience.css';
import hclLogo from '../hcl.jpg'; // Add logo in your project directory

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'HCL Software',
    location: 'Noida, Uttar Pradesh',
    date: 'Jan 2023 - Present',
    logo: hclLogo,
    descriptionType: 'list',
    description: [
      'Hands-on experience in Node.js, React.js, and MERN stack.',
      'Built scalable REST APIs, ensuring 99% uptime and client-specific customizations.',
      'Integrated Salesforce, ServiceNow, Nexthink for enhanced platform features.',
      'Created AI chatbots using IBM Watson, Azure Bot Framework, and OpenAI Vertex AI.',
      'Built apps for MS Teams, Slack, and web platforms using EJS, HTML/CSS, JS, and Adaptive Cards.',
      'Implemented ITIL best practices for change and incident management, improving resolution time by 10%.'
    ],
    techStack: 'Node.js, React.js, MongoDB, Express.js, Salesforce, ServiceNow, Azure Bot Framework'
  },
  {
    title: 'Intern',
    company: 'Ramraj Technology Solutions',
    location: 'Bhopal, Madhya Pradesh',
    date: 'June 2022 - Aug 2022',
    descriptionType: 'list',
    description: [
      'Conducted manual testing of web apps and resolved 10+ production bugs.',
      'Collaborated with senior developers to align builds with client standards.'
    ],
    techStack: 'Manual Testing, Agile Collaboration'
  }
];

const ExperienceTimeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="experience modern-v3">
      <h2 className="section-title">Professional Experience</h2>
      <Container className="timeline-container">
        {experiences.map((exp, index) => (
          <Row key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <Col xs={12}>
              <div className="icon-wrapper"><FaCircle size={10} /></div>
              <Card className="timeline-content">
                <Card.Body>
                  <div className="logo-title-wrapper">
                    {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />}
                    <div>
                      <Card.Title>{exp.title}</Card.Title>
                      <div className="company">{exp.company} – {exp.location}</div>
                      <div className="date">{exp.date}</div>
                    </div>
                  </div>

                  <Button
                    variant="link"
                    className="toggle-button"
                    onClick={() => toggleDetails(index)}
                  >
                    {expandedIndex === index ? 'Hide details' : 'Show details'}
                  </Button>

                  {expandedIndex === index && (
                    <div className={`description-container ${exp.descriptionType}`}>
                      {exp.descriptionType === 'list' ? (
                        <ul className="description-list-ltr">
                          {exp.description.map((item, i) => (
                            <li key={i}>
                              <span className="skill-icon"><FaCircle size={6} /></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{exp.description.join('\n')}</p>
                      )}
                    </div>
                  )}

                  <div className="tech-stack"><strong>Tech Stack:</strong> {exp.techStack}</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default ExperienceTimeline;
