"use client";
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiMongodb, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sindhuja_Resume.pdf";
    link.click();
  };

  // Stagger variants for the text content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <header className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={5} className="hero-content">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="hero-eyebrow">
                Hi, I'm <span className="name-gradient">Sindhuja</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="hero-title fw-800 mb-4">
                <span className="accent-text">MERN</span> Stack Developer
              </motion.h1>
              <motion.p variants={itemVariants} className="hero-description mb-5">
                I build robust, performant, and delightful web applications using modern technologies.
                Turning complex problems into elegant digital solutions.
              </motion.p>
              <motion.div variants={itemVariants} className="d-flex gap-3 flex-wrap">
                <a href="#contact" className="glow-btn text-decoration-none">Hire Me</a>
                <Button className="btn-outline-custom" onClick={handleDownload}>Download CV</Button>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={7} className="mt-5 mt-lg-0 text-center">
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="hero-glow-backdrop"></div>
              <motion.img
                src="/hero-illustration.png"
                alt="Sindhuja Developer"
                className="img-fluid hero-image"
                animate={{ y: [0, -16, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Floating nodes with Framer Motion */}
              <motion.div 
                className="floating-node node-1"
                animate={{ y: [0, -10, 0], x: [0, 0, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiReact color="#61dafb" />
              </motion.div>
              <motion.div 
                className="floating-node node-2"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <SiMongodb color="#3FAA35" />
              </motion.div>
              <motion.div 
                className="floating-node node-3"
                animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <SiNodedotjs color="#8cc84b" />
              </motion.div>
              <motion.div 
                className="floating-node node-4"
                animate={{ y: [0, 15, 0], x: [0, 15, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <SiTypescript color="#3178c6" />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
