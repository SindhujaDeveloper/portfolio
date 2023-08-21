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
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Skills
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Skills
          </h1>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            {skills.slice(0, 4).map((skill, index) => (
              <div className="skill mb-4" key={index}>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{skill.name}</h6>
                  <h6 className="font-weight-bold">{skill.value}%</h6>
                </div>
                <ProgressBar now={skill.value} variant={skill.color} />
              </div>
            ))}
          </Col>
          <Col md={6}>
            {skills.slice(4, 8).map((skill, index) => (
              <div className="skill mb-4" key={index}>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{skill.name}</h6>
                  <h6 className="font-weight-bold">{skill.value}%</h6>
                </div>
                <ProgressBar now={skill.value} variant={skill.color} />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SkillPage;
