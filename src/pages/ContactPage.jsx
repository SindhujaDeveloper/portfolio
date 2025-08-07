import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);

  return (
    <div className="container-fluid py-5" id="contact">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Contact
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Contact Me
          </h1>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="contact-form text-center">
              <div id="success" />
              <Form name="sentMessage" id="contactForm" validated={validation}>
                <Row>
                  <Col sm={6}>
                    <Form.Group controlId="name" className="control-group">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        required
                        data-validation-required-message="Please enter your name"
                      />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group controlId="email" className="control-group">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        required
                        data-validation-required-message="Please enter your email"
                      />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Group controlId="subject" className="control-group">
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        data-validation-required-message="Please enter a subject"
                      />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Group controlId="message" className="control-group">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        data-validation-required-message="Please enter your message"
                      />
                      <Form.Control.Feedback type="invalid" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Button
                      href={
                        validation === true
                          ? `mailto:crazydeveloper.p@gmail.com?subject=${subject}&body=${message}`
                          : ""
                      }
                      variant="outline-primary"
                      id="sendMessageButton"
                      onClick={() => setValidation(true)}
                    >
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
