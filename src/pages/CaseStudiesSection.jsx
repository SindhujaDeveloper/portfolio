import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const caseStudies = [
  {
    title: "Coffee Shop Web App",
    description:
      "A modern, responsive web application for a coffee shop, featuring an interactive menu, online ordering, and real-time order tracking. Built with React, Firebase, and Stripe integration.",
    url: "https://coffeeshop-pns.netlify.app/",
    image: require("../img/portfolio-1.png"),
    tags: ["React", "Firebase", "Stripe", "Responsive"],
  },
  {
    title: "2048 Game Clone",
    description:
      "A fun and challenging 2048 game clone with smooth animations and mobile support. Implemented advanced game logic and persistent high scores.",
    url: "https://2048-new-game.netlify.app/",
    image: require("../img/portfolio-4.png"),
    tags: ["JavaScript", "Game", "Mobile Friendly"],
  },
  {
    title: "Online Exam System",
    description:
      "A secure online exam platform for educators and students. Features include timed tests, instant grading, and analytics dashboard.",
    url: "https://online-exam-system-public.netlify.app/",
    image: require("../img/portfolio-2.jpg"),
    tags: ["React", "Node.js", "MongoDB", "Education"],
  },
  {
    title: "NSP Foods",
    description:
      "A fast and responsive food ordering platform application with intuitive navigation, modern cart interactions, and a clean UI.",
    url: "https://nspfoods01.netlify.app/",
    image: require("../img/portfolio-3.png"),
    tags: ["React", "UI/UX", "Restaurant"],
  },
];

const CaseStudiesSection = () => (
  <div className="container-fluid py-5 bg-light" id="case-studies">
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2 className="section-title mb-5">Projects</h2>
        </Col>
      </Row>
      <Row>
        {caseStudies.map((project, idx) => (
          <Col md={6} lg={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                style={{ height: 200, objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge badge-pill badge-primary mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  as="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="custom"
                  size="sm"
                >
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default CaseStudiesSection;
