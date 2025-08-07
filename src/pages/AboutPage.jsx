import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import aboutImage from "../img/profile_image.png";

const AboutPage = () => {
  return (
    <div className="container-fluid py-5" id="about">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            About
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            About Me
          </h1>
        </div>
        <Row className="align-items-center">
          <Col lg={5} pb={4} pb-lg-0>
            <img className="img-fluid rounded w-100" src={aboutImage} alt="" />
          </Col>
          <Col lg={7}>
            <h3 className="mb-4">Web Developer</h3>
            <p>
              Experienced web developer proficient in front-end and back-end
              technologies. Skilled in designing and implementing responsive and
              user-friendly websites. Strong expertise in HTML, CSS, JavaScript,
              and various frameworks. Dedicated to creating efficient, visually
              appealing online experiences.
            </p>
            <Row className="mb-3">
              <Col sm={6} py={5}>
                <h6>
                  Name: <span className="text-secondary">Sindhuja</span>
                </h6>
              </Col>
              <Col sm={6} py={5}>
                <h6>
                  Birthday:{" "}
                  <span className="text-secondary">14 January 2000</span>
                </h6>
              </Col>
              <Col sm={6} py={2}>
                <h6>
                  Degree: <span className="text-secondary">B.E</span>
                </h6>
              </Col>
              <Col sm={6} py={2}>
                <h6>
                  Experience: <span className="text-secondary">2.7 Years</span>
                </h6>
              </Col>
              <Col sm={6} py={2}>
                <h6>
                  Phone:{" "}
                  <a
                    href="tel:+917868049366"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary"
                  >
                    +91 7868049366
                  </a>
                </h6>
              </Col>
              <Col sm={6} py={2}>
                <h6>
                  Email:{" "}
                  <span className="text-secondary">
                    crazydeveloper.p@gmail.com
                  </span>
                </h6>
              </Col>
              <Col sm={6} py={2}>
                <h6>
                  Address:{" "}
                  <a
                    className="text-secondary"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu/@11.0139578,76.8848326,12z/data=!3m1!4b1!4m6!3m5!1s0x3ba859af2f971cb5:0x2fc1c81e183ed282!8m2!3d11.0168445!4d76.9558321!16zL20vMDE5ZmM0?entry=ttu"
                  >
                    123 Street, Coimbatore, Tamilnadu
                  </a>
                </h6>
              </Col>
              <Col sm={6} py={2}>
                <h6>
                  Freelance: <span className="text-secondary">Available</span>
                </h6>
              </Col>
            </Row>
            <Button
              href="mailto:crazydeveloper.p@gmail.com?subject=Hiring Request"
              variant="outline-primary"
              className="mr-4"
            >
              Hire Me
            </Button>
            {/* <Button variant="outline-primary">Learn More</Button> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
