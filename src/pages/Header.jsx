import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import VideoModal from "../components/VideoModal";
import profileImage from "../img/profile_image.png";
import TypewriterComponent from "typewriter-effect";

import ExamplePdf from "../img/sindhuja-resume-updated.pdf";

const Header = () => {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <motion.div
      className="container-fluid d-flex align-items-center mb-5 py-5 header-hero-bg"
      id="home"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Decorative background shape */}
      <div className="header-bg-shape" aria-hidden="true" />
      <Container>
        <Row className="align-items-center pt-5 mt-5">
          <Col lg={5} className="px-5 pl-lg-0 pb-5 pb-lg-0 text-center">
            <motion.img
              className="img-fluid rounded-circle shadow-sm mx-auto d-block"
              src={profileImage}
              alt="Profile"
              style={{ width: "320px", height: "320px", objectFit: "cover" }}
              loading="lazy"
              decoding="async"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            />
          </Col>
          <Col lg={7} className="text-center text-lg-left">
            <motion.h3
              className="mb-2 text-muted"
              style={{ fontSize: "1.5rem", fontWeight: "500", letterSpacing: "1px" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Hello, I'm
            </motion.h3>
            <motion.h3
              className="display-4 text-primary font-weight-bold text-uppercase mb-2"
              style={{
                color: "#0BCEAF",
                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Sindhuja
            </motion.h3>
            <div className="mb-3">
              <h2 className="typed-text-output d-inline font-weight-light" style={{ color: '#2b2d42', fontSize: '1.8rem' }}>
                <TypewriterComponent
                  options={{
                    strings: [
                      "Senior Software Developer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h2>
            </div>
            <div className="header-tagline mt-2 mb-4" style={{ fontSize: "1.2rem", color: "#6c757d", lineHeight: "1.6" }}>
              Building beautiful, dynamically engaging, and accessible web experiences
            </div>
            <motion.div
              className="d-flex align-items-center justify-content-center justify-content-lg-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <a
                href={ExamplePdf}
                download="Sindhuja's CV"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="custom" className="mr-4">
                  Download CV
                </Button>
              </a>
              <Button
                type="button"
                className="btn-play"
                onClick={() => setVideoModal(true)}
                aria-label="Play Introduction Video"
              >
                <span />
              </Button>
              <h5 className="font-weight-normal  m-0 ml-4 d-none d-sm-block">
                Play Video
              </h5>
            </motion.div>
            {/* Social Icons */}
            <motion.div
              className="d-flex align-items-center mt-4 mb-2 header-socials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <a href="https://github.com/SindhujaDeveloper/" target="_blank" rel="noreferrer" aria-label="GitHub" className="btn btn-light btn-social mr-2">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/sindhuja-periyasamy-058b7a227/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn btn-light btn-social mr-2">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.instagram.com/nasika_30/" target="_blank" rel="noreferrer" aria-label="Instagram" className="btn btn-light btn-social">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </motion.div>
          </Col>
        </Row>
        <VideoModal
          videoModal={videoModal}
          handleVideoModalClose={() => setVideoModal(false)}
        />
      </Container>
    </motion.div>
  );
};

export default Header;
