"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaDownload, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSkills() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Done", value: "40+" },
    { label: "Happy Clients", value: "25+" },
  ];

  return (
    <section id="about" className="section py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div 
              className="about-visual float-anim"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
            >
              <div className="about-image-wrapper glass-card p-2">
                <div className="about-image-inner">
                  <img src="/about-me.gif" alt="About Me" />
                </div>
              </div>
              <motion.div 
                className="experience-badge-modern glass-card p-3"
                whileHover={{ scale: 1.05 }}
              >
                <span className="badge-number">05</span>
                <span className="badge-text">Years of<br/>Experience</span>
              </motion.div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 50, delay: 0.2 }}
            >
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
                      <motion.div 
                        className="stat-item text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                      >
                        <div className="stat-value text-white fw-800 fs-2">{stat.value}</div>
                        <div className="stat-label text-muted small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>{stat.label}</div>
                      </motion.div>
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
