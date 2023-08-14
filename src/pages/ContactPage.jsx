import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
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
              <Form name="sentMessage" id="contactForm" noValidate>
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
                      variant="outline-primary"
                      type="submit"
                      id="sendMessageButton"
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
