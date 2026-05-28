"use client";
import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  // const handleScrollDown = () => {
  //   const nextSection = document.getElementById("about");
  //   if (nextSection) {
  //     window.scrollTo({
  //       top: nextSection.offsetTop - 70,
  //       behavior: "smooth"
  //     });
  //   }
  // };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sindhuja_Resume.pdf";
    link.click();
  };

  return (
    <header className="hero-section" id="home">
      <Container>
        <Row className="align-items-center min-vh-100 py-5">
          <Col lg={5} className="hero-content">
            <div className="hero-eyebrow fade-in">
              Hi, I'm <span className="name-gradient">Sindhuja</span>
            </div>
            <h1 className="hero-title fw-800 mb-4">
              <span className="accent-text">MERN</span> Stack Developer
            </h1>
            <p className="hero-description mb-5">
              I build robust, performant, and delightful web applications using modern technologies.
              Turning complex problems into elegant digital solutions.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#contact" className="glow-btn text-decoration-none">Hire Me</a>
              <Button className="btn-outline-custom" onClick={handleDownload}>Download CV</Button>
            </div>
          </Col>

          <Col lg={7} className="mt-5 mt-lg-0 text-center">
            <div className="hero-image-container float-anim">
              <div className="hero-glow-backdrop"></div>
              <img
                src="/hero-illustration.png"
                alt="Sindhuja Developer"
                className="img-fluid hero-image"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* <div className="scroll-indicator" onClick={handleScrollDown}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span>
          <span></span>
        </div>
      </div> */}
    </header>
  );
}
