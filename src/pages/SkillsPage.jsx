import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const SkillPage = () => {
  const skills = [
    { name: "HTML", value: 80, color: null },
    { name: "CSS", value: 60, color: "warning" },
    { name: "Bootstrap", value: 85, color: "info" },
    { name: "Material UI", value: 80, color: "danger" },
    { name: "React Bootstrap", value: 80, color: "info" },
    { name: "Javascript", value: 90, color: "dark" },
    { name: "React JS", value: 80, color: "danger" },
    { name: "Node JS", value: 40, color: "dark" },
  ];

  return (
    <div className="container-fluid py-5" id="skill">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 className="section-title mb-5">Skill Progress</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          {skills.map((skill, index) => (
            <Col md={6} key={index}>
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{skill.name}</h6>
                  <h6 className="font-weight-bold">{skill.value}%</h6>
                </div>
                <ProgressBar now={skill.value} variant={skill.color} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SkillPage;
