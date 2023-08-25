import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import VideoModal from "../components/VideoModal";
import profileImage from "../img/profile_image.png";
import TypewriterComponent from "typewriter-effect";

import ExamplePdf from "../img/sindhuja-resume-updated.pdf";

const Header = () => {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <div
      className="container-fluid bg-primary d-flex align-items-center mb-5 py-5"
      id="home"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="px-5 pl-lg-0 pb-5 pb-lg-0">
            <img
              className="img-fluid w-100 rounded-circle shadow-sm"
              src={profileImage}
              alt=""
            />
          </Col>
          <Col lg={7} className="text-center text-lg-left">
            <h3 className="text-white font-weight-normal mb-3">I'm</h3>
            <h1
              className="display-3 text-uppercase text-primary mb-2"
              style={{ WebkitTextStroke: "2px #ffffff" }}
            >
              Sindhuja
            </h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Web Developer, Front End Developer, Backend Developer"
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "Web Developer, Front End Developer, Backend Developer"
                    )
                    .start();
                }}
              />
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <a
                href={ExamplePdf}
                download="Sindhuja's CV"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline-light" className="mr-5">
                  Download CV
                </Button>
              </a>

              <Button
                type="button"
                className="btn-play"
                onClick={() => setVideoModal(true)}
              >
                <span />
              </Button>
              <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">
                Play Video
              </h5>
            </div>
          </Col>
        </Row>
        <VideoModal
          videoModal={videoModal}
          handleVideoModalClose={() => setVideoModal(false)}
        />
      </Container>
    </div>
  );
};

export default Header;
