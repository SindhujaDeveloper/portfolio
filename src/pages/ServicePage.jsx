import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicePage = () => {
  const services = [
    {
      icon: "fa-laptop",
      title: "Web Design",
      description:
        "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita",
    },
    {
      icon: "fa-laptop-code",
      title: "Web Development",
      description:
        "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita",
    },
    {
      icon: "fa-android",
      title: "Apps Design",
      description:
        "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita",
    },
    {
      icon: "fa-apple",
      title: "Apps Development",
      description:
        "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita",
    },
    {
      icon: "fa-search",
      title: "SEO",
      description:
        "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita",
    },
    {
      icon: "fa-edit",
      title: "Content Creating",
      description:
        "Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita",
    },
  ];

  return (
    <div className="container-fluid pt-5" id="service">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Service
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Services
          </h1>
        </div>
        <Row className="pb-3">
          {services.map((service, index) => (
            <Col lg={4} md={6} className="text-center mb-5" key={index}>
              <div className="d-flex align-items-center justify-content-center mb-4">
                <i
                  className={`fa fa-2x ${service.icon} service-icon bg-primary text-white mr-3`}
                />
                <h4 className="font-weight-bold m-0">{service.title}</h4>
              </div>
              <p>{service.description}</p>
              <a
                className="border-bottom border-primary text-decoration-none"
                href="#description"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicePage;
