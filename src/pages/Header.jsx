import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import VideoModal from "../components/VideoModal";
import profileImage from "../img/profile.jpg";
import TypewriterComponent from "typewriter-effect";

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
              Kate Winslet
            </h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Web Designer, Web Developer, Front End Developer, Apps Designer,Apps Developer"
                    )
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(
                      "Web Designer, Web Developer, Front End Developer, Apps Designer,Apps Developer"
                    )
                    .start();
                }}
              />
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <Button variant="outline-light" className="mr-5">
                Download CV
              </Button>
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
