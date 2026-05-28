"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from "react-icons/fa";

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/sindhuja14",
  github: "https://github.com/SindhujaDeveloper/",
  mail: "mailto:sindhujap255@gmail.com",
};

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-top py-5">
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <div className="footer-brand mb-3">
                <span className="text-white fw-bold fs-3" style={{ letterSpacing: '1px' }}>
                  SINDHUJA<span style={{ color: 'var(--portfolio-glow1)' }}>.</span>
                </span>
              </div>
              <p className="text-secondary mb-4 footer-tagline">
                Crafting robust and scalable web applications with clean, modern code. Specializing in front-end and full-stack solutions.
              </p>
              <div className="d-flex align-items-center gap-3">
                <a href={SOCIAL.linkedin} className="footer-social-icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={SOCIAL.github} className="footer-social-icon" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href={SOCIAL.mail} className="footer-social-icon"><FaEnvelope /></a>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="ps-lg-5">
              <h5 className="text-white fw-bold mb-4 footer-heading">Explore</h5>
              <ul className="list-unstyled footer-links d-flex flex-column gap-2">
                <li><a href="#about" onClick={(e) => handleNav(e, "about")} className="text-secondary">About Me</a></li>
                <li><a href="#skills" onClick={(e) => handleNav(e, "skills")} className="text-secondary">Technical Arsenal</a></li>
                <li><a href="#experience" onClick={(e) => handleNav(e, "experience")} className="text-secondary">Professional Journey</a></li>
                <li><a href="#projects" onClick={(e) => handleNav(e, "projects")} className="text-secondary">Portfolio Highlights</a></li>
                <li><a href="#contact" onClick={(e) => handleNav(e, "contact")} className="text-secondary">Get In Touch</a></li>
              </ul>
            </Col>
            
            <Col lg={4} md={12}>
              <h5 className="text-white fw-bold mb-4 footer-heading">Let's Create Together</h5>
              <p className="text-secondary mb-4">
                Have a project idea, want to collaborate, or just want to say hi? Feel free to connect.
              </p>
              <a href="mailto:sindhujap255@gmail.com" className="footer-cta-btn">
                sindhujap255@gmail.com
              </a>
            </Col>
          </Row>
        </div>
        
        <div className="footer-bottom py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-muted small mb-0 order-2 order-md-1">
            &copy; {new Date().getFullYear()} Sindhuja. All rights reserved.
          </p>
          <button 
            onClick={handleScrollToTop} 
            className="scroll-to-top-btn order-1 order-md-2"
            aria-label="Scroll to top"
          >
            <FaChevronUp /> Back to top
          </button>
        </div>
      </Container>
    </footer>
  );
}
