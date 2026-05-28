"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const recipient = "sindhujap255@gmail.com";
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="section py-5 mb-5">
      <Container>
        <span className="section-subtitle">Get In Touch</span>
        <h3 className="section-title">Let's Connect!</h3>
        
        <Row className="mt-5">
          <Col lg={5} className="contact-info-col">
            <div className="contact-info-card glass-card p-5 h-100">
              <h4 className="text-white mb-4">Contact Information</h4>
              <p className="text-secondary mb-5">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="d-flex flex-column gap-4">
                <div className="contact-item d-flex align-items-center gap-4">
                  <div className="contact-icon-box">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-secondary small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Email</div>
                    <div className="text-white fw-bold">sindhujap255@gmail.com</div>
                  </div>
                </div>
                
                <div className="contact-item d-flex align-items-center gap-4">
                  <div className="contact-icon-box">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-secondary small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Phone</div>
                    <div className="text-white fw-bold">+91 7868049366</div>
                  </div>
                </div>
                
                <div className="contact-item d-flex align-items-center gap-4">
                  <div className="contact-icon-box">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <div className="text-secondary small fw-bold text-uppercase" style={{ letterSpacing: '1px' }}>Location</div>
                    <div className="text-white fw-bold">Tamil Nadu, India</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={7}>
            <div className="contact-form-wrapper glass-card p-5">
              <Form onSubmit={handleSubmit} noValidate>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4 custom-form-group">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="John Doe" 
                        className="custom-input" 
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4 custom-form-group">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="john@example.com" 
                        className="custom-input" 
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-4 custom-form-group">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.subject}
                    placeholder="Project Inquiry" 
                    className="custom-input" 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-5 custom-form-group">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                    placeholder="How can I help you?" 
                    className="custom-input" 
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button type="submit" className="glow-btn d-flex align-items-center gap-2">
                  Send Message <FaPaperPlane size={14} />
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
