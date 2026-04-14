import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ExperiencePage = () => {
  const experience = [
    {
      title: "Senior Software Developer",
      company: "Coretopia Technologies",
      duration: "October 2025 - Present",
      description: "Building responsive and performant web applications focusing on React, modern Javascript, and seamless user experiences. Collaborating closely with teams to deliver high-quality digital solutions."
    },
    {
      title: "Software Developer - Applications",
      company: "Aximsoft India Pvt Ltd",
      duration: "December 2017 - October 2025",
      description: "Join as a Software Trainee specializing in React JS and React Bootstrap. Learn to develop interactive and responsive front-end interfaces. Gain hands-on experience in coding, testing, and problem-solving while working alongside experienced developers."
    },
    {
      title: "Junior Developer",
      company: "Towno",
      duration: "April 2017 - December 2017",
      description: "Seeking a passionate Junior Developer proficient in React JS and React Bootstrap. Assist in building and maintaining web applications, translating UI/UX designs into functional components. Collaborate with the team, write clean code, and troubleshoot issues to create seamless user experiences"
    }
  ];

  const TimelineItem = ({ title, subtitle, duration, description, index }) => (
    <motion.div
      className="position-relative mb-5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        className="position-absolute shadow-sm"
        style={{
          top: "10%",
          left: "-42px",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "#0BCEAF",
          border: "4px solid white"
        }}
      />
      <Card className="border-0 shadow-sm" style={{ borderRadius: "1rem" }}>
        <Card.Body className="p-4">
          <h5 className="font-weight-bold mb-2">{title}</h5>
          <p className="mb-3 text-muted">
            <strong style={{ color: "#0BCEAF" }}>{subtitle}</strong> | <small className="font-weight-bold">{duration}</small>
          </p>
          <p className="mb-0 text-secondary" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
            {description}
          </p>
        </Card.Body>
      </Card>
    </motion.div>
  );

  return (
    <div className="container-fluid py-5" id="experience">
      <Container>
        <Row>
          <Col lg={12}>
            <motion.h2
              className="section-title mb-5 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              My Experience
            </motion.h2>
            <div style={{ borderLeft: "3px solid #0BCEAF", paddingLeft: "30px", marginLeft: "10px", marginTop: "20px" }}>
              {experience.map((item, idx) => (
                <TimelineItem
                  key={idx}
                  index={idx}
                  title={item.title}
                  subtitle={item.company}
                  duration={item.duration}
                  description={item.description}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ExperiencePage;
