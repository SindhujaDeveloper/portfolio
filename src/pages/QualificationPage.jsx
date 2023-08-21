import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const QualificationPage = () => {
  return (
    <div className="container-fluid py-5" id="qualification">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Quality
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Education & Experience
          </h1>
        </div>
        <Row className="align-items-center">
          <Col lg={6}>
            <h3 className="mb-4">My Education</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Bachelor's In CSE</h5>
                <p className="mb-2">
                  <strong>Adithya Institute</strong> |{" "}
                  <small>2017 - 2021</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                  sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem
                  kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet
                  lorem diam
                </p>
              </div>
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">
                  Bio-Maths - 12th Standard
                </h5>
                <p className="mb-2">
                  <strong>Bharathi Higher Secondary School</strong> |{" "}
                  <small>2016 - 2017</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                  sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem
                  kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet
                  lorem diam
                </p>
              </div>
              {/* <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">10th Standard</h5>
                <p className="mb-2">
                  <strong>Bharathi Higher Secondary School</strong> |{" "}
                  <small>2014 - 2015</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                  sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem
                  kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet
                  lorem diam
                </p>
              </div> */}
              {/* Repeat for other education entries */}
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="mb-4">My Experience</h3>
            <div className="border-left border-primary pt-2 pl-4 ml-2">
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Junior Developer</h5>
                <p className="mb-2">
                  <strong>Towno</strong> | <small>April 2017 - December 2017</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                  sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem
                  kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet
                  lorem diam
                </p>
              </div>
              <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Software Trainee</h5>
                <p className="mb-2">
                  <strong>Aximsoft India Pvt Ltd</strong> | <small>December 2017 - now</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                  sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem
                  kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet
                  lorem diam
                </p>
              </div>
              {/* <div className="position-relative mb-4">
                <i
                  className="far fa-dot-circle text-primary position-absolute"
                  style={{ top: 2, left: "-32px" }}
                />
                <h5 className="font-weight-bold mb-1">Web Designer</h5>
                <p className="mb-2">
                  <strong>Soft Company</strong> | <small>2000 - 2050</small>
                </p>
                <p>
                  Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                  sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem
                  kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet
                  lorem diam
                </p>
              </div> */}
              {/* Repeat for other experience entries */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default QualificationPage;
