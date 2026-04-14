import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    image: testimonial1,
    text: "Sindhuja is a highly skilled developer who delivered our project on time and exceeded expectations. Her attention to detail and communication were excellent.",
    role: "Product Manager, TechCorp"
  },
  {
    name: "Rahul Verma",
    image: testimonial2,
    text: "Working with Sindhuja was a pleasure. She brought creative solutions and a strong work ethic to our team. Highly recommended!",
    role: "Lead Designer, Creatives Inc."
  },
  {
    name: "Aishwarya Patel",
    image: testimonial3,
    text: "Professional, reliable, and talented. Sindhuja's technical expertise helped us launch a successful product.",
    role: "CTO, StartupX"
  }
];

const TestimonialsSection = () => (
  <div className="container-fluid py-5 bg-light" id="testimonials">
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2 className="section-title mb-5">Testimonials</h2>
        </Col>
      </Row>
      <Row>
        {testimonials.map((t, idx) => (
          <Col md={4} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm text-center">
              <Card.Img
                variant="top"
                src={t.image}
                alt={`Photo of ${t.name}, ${t.role}`}
                loading="lazy"
                decoding="async"
                style={{ width: 120, height: 120, objectFit: "cover", borderRadius: "50%", margin: "1.5rem auto 0" }}
              />
              <Card.Body>
                <Card.Text className="mb-2">"{t.text}"</Card.Text>
                <Card.Title className="mb-0">{t.name}</Card.Title>
                <small className="text-muted">{t.role}</small>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default TestimonialsSection;
