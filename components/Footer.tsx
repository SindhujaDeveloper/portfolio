"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/sindhuja14",
  github: "https://github.com/SindhujaDeveloper/",
  mail: "mailto:sindhujap255@gmail.com",
};

export default function Footer() {
  const handleScrollToTop = () => {
    window.history.pushState(null, "", "#home");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    
    // Update URL using History API
    window.history.pushState(null, "", `#${id}`);
    
    // Smooth scroll to section
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
        <motion.div 
          className="footer-top py-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <Row className="gy-4">
            <Col lg={4} md={6}>
              <div className="footer-brand mb-3">
                <span className="text-white fw-bold fs-3" style={{ letterSpacing: '1px' }}>
                  SINDHUJA
                </span>
              </div>
              <p className="text-secondary mb-4 footer-tagline">
                Crafting robust and scalable web applications with clean, modern code. Specializing in front-end and full-stack solutions.
              </p>
              <div className="d-flex align-items-center gap-3">
                <motion.a whileHover={{ y: -3 }} href={SOCIAL.linkedin} className="footer-social-icon" target="_blank" rel="noreferrer"><FaLinkedin /></motion.a>
                <motion.a whileHover={{ y: -3 }} href={SOCIAL.github} className="footer-social-icon" target="_blank" rel="noreferrer"><FaGithub /></motion.a>
                <motion.a whileHover={{ y: -3 }} href={SOCIAL.mail} className="footer-social-icon"><FaEnvelope /></motion.a>
              </div>
            </Col>
            
            <Col lg={4} md={6} className="ps-lg-5">
              <h5 className="text-white fw-bold mb-4 footer-heading">Explore</h5>
              <ul className="list-unstyled footer-links d-flex flex-column gap-2">
                <motion.li whileHover={{ x: 5 }}><a href="#about" onClick={(e) => handleNav(e, "about")} className="text-secondary">About Me</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#skills" onClick={(e) => handleNav(e, "skills")} className="text-secondary">Technical Arsenal</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#experience" onClick={(e) => handleNav(e, "experience")} className="text-secondary">Professional Journey</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#projects" onClick={(e) => handleNav(e, "projects")} className="text-secondary">Portfolio Highlights</a></motion.li>
                <motion.li whileHover={{ x: 5 }}><a href="#contact" onClick={(e) => handleNav(e, "contact")} className="text-secondary">Get In Touch</a></motion.li>
              </ul>
            </Col>
            
            <Col lg={4} md={12}>
              <h5 className="text-white fw-bold mb-4 footer-heading">Let's Create Together</h5>
              <p className="text-secondary mb-4">
                Have a project idea, want to collaborate, or just want to say hi? Feel free to connect.
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:sindhujap255@gmail.com" 
                className="footer-cta-btn"
              >
                sindhujap255@gmail.com
              </motion.a>
            </Col>
          </Row>
        </motion.div>
        
        <div className="footer-bottom py-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-muted small mb-0 order-2 order-md-1">
            &copy; {new Date().getFullYear()} Sindhuja. All rights reserved.
          </p>
          <motion.button 
            whileHover={{ y: -3 }}
            onClick={handleScrollToTop} 
            className="scroll-to-top-btn order-1 order-md-2"
            aria-label="Scroll to top"
          >
            <FaChevronUp /> Back to top
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}
