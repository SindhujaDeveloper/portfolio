import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const EducationPage = () => {
  const education = [
    {
      title: "Bachelor's In CSE",
      institution: "Adithya Institute",
      duration: "2017 - 2021",
      description: "Explore the digital frontier with a CSE degree. Master programming, algorithms, and cutting-edge tech. Build the future with hands-on projects and industry insight. Your gateway to innovation and limitless opportunities."
    },
    {
      title: "Bio-Maths - 12th Standard",
      institution: "Bharathi Higher Secondary School",
      duration: "2016 - 2017",
      description: "Discover the synergy of biology and mathematics in the 12th-grade Bio-Maths program at Empower School Academia. Uncover the mathematical intricacies behind biological phenomena, from genetics to ecosystems."
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
    <div className="container-fluid py-5 bg-light" id="education">
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
              My Education
            </motion.h2>
            <div style={{ borderLeft: "3px solid #0BCEAF", paddingLeft: "30px", marginLeft: "10px", marginTop: "20px" }}>
              {education.map((item, idx) => (
                <TimelineItem 
                  key={idx}
                  index={idx}
                  title={item.title}
                  subtitle={item.institution}
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

export default EducationPage;
