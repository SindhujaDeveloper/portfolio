import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);

  return (
    <div className="container-fluid py-5" id="contact">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.h2 className="section-title mb-3" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>Get In Touch</motion.h2>
            <p className="text-muted">I'm currently available to take on new projects. Feel free to send me a message about anything that you want to run past me.</p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card className="border-0 shadow-sm p-4 h-100" style={{ borderRadius: "1rem" }}>
                <Card.Body>
                  <h4 className="font-weight-bold mb-4" style={{color: "#0BCEAF"}}>Contact Information</h4>
                  <div className="d-flex mb-4 align-items-center">
                    <div className="d-flex align-items-center justify-content-center border rounded-circle shadow-sm" style={{ width: "50px", height: "50px", borderColor: "#0BCEAF !important", color: "#0BCEAF", fontSize: "1.2rem", backgroundColor: "white" }}>
                      <i className="fa fa-map-marker-alt"></i>
                    </div>
                    <div className="ml-4">
                      <h6 className="font-weight-bold mb-1">Our Location</h6>
                      <p className="m-0 text-muted">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                  <div className="d-flex mb-4 align-items-center">
                    <div className="d-flex align-items-center justify-content-center border rounded-circle shadow-sm" style={{ width: "50px", height: "50px", borderColor: "#0BCEAF !important", color: "#0BCEAF", fontSize: "1.2rem", backgroundColor: "white" }}>
                      <i className="fa fa-envelope"></i>
                    </div>
                    <div className="ml-4">
                      <h6 className="font-weight-bold mb-1">Email Me</h6>
                      <p className="m-0 text-muted" style={{wordBreak: "break-all"}}>crazydeveloper.p@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex mb-4 align-items-center">
                    <div className="d-flex align-items-center justify-content-center border rounded-circle shadow-sm" style={{ width: "50px", height: "50px", borderColor: "#0BCEAF !important", color: "#0BCEAF", fontSize: "1.2rem", backgroundColor: "white" }}>
                      <i className="fa fa-phone-alt"></i>
                    </div>
                    <div className="ml-4">
                      <h6 className="font-weight-bold mb-1">Call Me</h6>
                      <p className="m-0 text-muted">+91 7868049366</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <Card className="border-0 shadow-sm p-4" style={{ borderRadius: "1rem" }}>
                <Card.Body>
                  <Form name="sentMessage" id="contactForm" validated={validation}>
                    <Row>
                      <Col sm={6}>
                        <Form.Group controlId="name" className="mb-4">
                          <Form.Control type="text" placeholder="Your Name" required className="py-4 border-light bg-light" style={{ borderRadius: "0.5rem" }} />
                          <Form.Control.Feedback type="invalid">Please enter your name</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col sm={6}>
                        <Form.Group controlId="email" className="mb-4">
                          <Form.Control type="email" placeholder="Your Email" required className="py-4 border-light bg-light" style={{ borderRadius: "0.5rem" }} />
                          <Form.Control.Feedback type="invalid">Please enter your email</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId="subject" className="mb-4">
                      <Form.Control type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required className="py-4 border-light bg-light" style={{ borderRadius: "0.5rem" }} />
                      <Form.Control.Feedback type="invalid">Please enter a subject</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="message" className="mb-4">
                      <Form.Control as="textarea" rows={5} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required className="py-3 border-light bg-light" style={{ borderRadius: "0.5rem" }} />
                      <Form.Control.Feedback type="invalid">Please enter your message</Form.Control.Feedback>
                    </Form.Group>
                    <div className="mt-4">
                      <Button
                        href={validation === true ? `mailto:crazydeveloper.p@gmail.com?subject=${subject}&body=${message}` : undefined}
                        variant="custom"
                        id="sendMessageButton"
                        onClick={() => setValidation(true)}
                        className="py-2 px-4 shadow-sm w-100"
                        style={{ borderRadius: "0.5rem" }}
                      >
                        Send Message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
