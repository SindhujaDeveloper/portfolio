import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <Container className="text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-light btn-social mr-2"
            href="https://github.com/SindhujaDeveloper/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-light btn-social mr-2"
            href="https://www.linkedin.com/in/sindhuja-periyasamy-058b7a227/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="btn btn-light btn-social"
            href="https://www.instagram.com/nasika_30/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="d-flex justify-content-center mb-3">
          {/* <a className="text-white" href="" disabled="disabled"> */}
          Privacy
          {/* </a> */}
          <span className="px-3">|</span>
          {/* <a className="text-white" href="#terms" aria-disabled> */}
          Terms
          {/* </a> */}
          <span className="px-3">|</span>
          {/* <a className="text-white" href="#faq" aria-disabled> */}
          FAQs
          {/* </a> */}
          <span className="px-3">|</span>
          {/* <a className="text-white" href="#help" aria-disabled> */}
          Help
          {/* </a> */}
        </div>
        <p className="m-0">
          {/* <a className="text-white font-weight-bold" href="#domain">
            Domain Name
          </a> */}
          All Rights Reserved. Designed by{" "}
          <a
            className="text-white font-weight-bold"
            href="https://portfolioofsindhuja.com"
          >
            © Sindhuja
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
