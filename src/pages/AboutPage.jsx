import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";

const AboutPage = () => {
  return (
    <motion.div className="container-fluid py-5 bg-light" id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <motion.h3 className="section-title mb-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }} viewport={{ once: true }}>
              Discover More About Me
            </motion.h3>
            <motion.p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} viewport={{ once: true }}>
              I’m a passionate <b style={{ color: "#0BCEAF" }}>Web Developer</b> with over 2 years of experience bringing digital products to life. I seamlessly blend creative design logic with robust technical architectures using <b>React</b>, <b>Node.js</b>, and <b>JavaScript</b>. My goal is simple: to create delightful, highly performant, and accessible user experiences that solve real-world problems.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} viewport={{ once: true }}>
              <h5 className="font-weight-bold mb-3">Core Technologies</h5>
              <div className="d-flex flex-wrap mb-4">
                {["React & JavaScript", "Node.js", "Bootstrap & Material UI", "Responsive Design", "API Integration", "UI/UX Principles", "Performance Optimization"].map((skill, idx) => (
                  <span key={idx} className="badge badge-pill shadow-sm py-2 px-3 m-1" style={{ fontSize: "0.9rem", border: "1px solid #0BCEAF", color: "#0BCEAF", backgroundColor: "transparent" }}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className="d-flex align-items-center mt-3">
                <a href="#contact">
                  <Button variant="custom" className="py-2 px-4 shadow-lg mr-3">Hire Me</Button>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default AboutPage;
