import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
      <Container className="text-center py-5">
        <div className="d-flex justify-content-center mb-4">
          <a className="btn btn-light btn-social mr-2" href="#twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="btn btn-light btn-social mr-2" href="#facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="btn btn-light btn-social mr-2" href="#linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a className="btn btn-light btn-social" href="#instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <a className="text-white" href="#privacy">
            Privacy
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#terms">
            Terms
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#faq">
            FAQs
          </a>
          <span className="px-3">|</span>
          <a className="text-white" href="#help">
            Help
          </a>
        </div>
        <p className="m-0">
          ©{" "}
          <a className="text-white font-weight-bold" href="#domain">
            Domain Name
          </a>
          . All Rights Reserved. Designed by{" "}
          <a
            className="text-white font-weight-bold"
            href="https://portfolioofsindhuja.com"
          >
            Sindhuja
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
