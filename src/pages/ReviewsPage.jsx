import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import testimonial1 from "../img/testimonial-1.jpg";
import testimonial2 from "../img/testimonial-2.jpg";
import testimonial3 from "../img/testimonial-3.jpg";

const TestimonialPage = () => {
  const testimonials = [
    {
      content:
        "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita",
      image: testimonial1,
      name: "Client Name",
      profession: "Profession",
    },
    {
      content:
        "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita",
      image: testimonial2,
      name: "Client Name",
      profession: "Profession",
    },
    {
      content:
        "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita",
      image: testimonial3,
      name: "Client Name",
      profession: "Profession",
    },
  ];

  return (
    <div className="container-fluid py-5" id="testimonial">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Review
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Clients Say
          </h1>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="owl-carousel testimonial-carousel">
              {testimonials.map((testimonial, index) => (
                <div className="text-center" key={index}>
                  <FaQuoteLeft className="fa-3x text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    {testimonial.content}
                  </h4>
                  <img
                    className="img-fluid rounded-circle mx-auto mb-3"
                    src={testimonial.image}
                    style={{ width: 80, height: 80 }}
                    alt=""
                  />
                  <h5 className="font-weight-bold m-0">{testimonial.name}</h5>
                  <span>{testimonial.profession}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialPage;
