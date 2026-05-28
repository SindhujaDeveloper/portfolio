"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaUserAlt } from "react-icons/fa";

export default function AboutSkills() {
  const stats = [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Done", value: "40+" },
    { label: "Happy Clients", value: "25+" },
  ];

  return (
    <section id="about" className="section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <div className="about-visual float-anim">
              <div className="about-image-wrapper glass-card p-2">
                <div className="about-image-inner">
                  <img src="/hero-illustration.svg" alt="About Me" className="img-fluid" />
                </div>
              </div>
              <div className="experience-badge-modern glass-card p-3">
                <span className="badge-number">06</span>
                <span className="badge-text">Years of<br/>Experience</span>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <span className="section-subtitle">A Bit About Me</span>
            <h2 className="section-title">Turning Vision Into <span className="accent-text">Reality</span></h2>
            
            <div className="about-description mt-4">
              <p className="text-secondary fs-5 leading-relaxed text-justify">
                I'm a dedicated MERN Stack Developer with a passion for creating high-performance, 
                scalable web solutions. With over 6 years of experience in the industry, 
                I've mastered the art of building seamless user experiences from concept to deployment.
              </p>
              
              <Row className="stats-grid mt-3 g-4">
                {stats.map((stat, i) => (
                  <Col key={i} xs={4}>
                    <div className="stat-item text-center">
                      <div className="stat-value text-white fw-800 fs-2">{stat.value}</div>
                      <div className="stat-label text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>{stat.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
              
              {/* <div className="d-flex gap-3 mt-5">
                <Button className="glow-btn d-flex align-items-center gap-2">
                  <FaUserAlt size={14} /> My Story
                </Button>
                <Button className="btn-outline-custom d-flex align-items-center gap-2">
                  <FaDownload size={14} /> Download CV
                </Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
