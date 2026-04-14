import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Blog1 from "../img/blog-1.jpg";
import Blog2 from "../img/blog-2.jpg";
import Blog3 from "../img/blog-3.jpg";

const BlogPage = () => {
  return (
    <div className="container-fluid pt-5" id="blog">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h2 className="section-title mb-5">Latest Blog</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={4} mb={5}>
            <div className="position-relative mb-4">
              <img className="img-fluid rounded w-100" src={Blog1} alt="Blog post 1: Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum" />
              <div className="blog-date">
                <h4 className="font-weight-bold mb-n1">01</h4>
                <small className="text-uppercase">Jan</small>
              </div>
            </div>
            <h5 className="font-weight-medium mb-4">
              Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
            </h5>
            <Button
              variant="custom"
              size="sm"
              className="py-2"
              href=""
            >
              Read More
            </Button>
          </Col>
          <Col lg={4} mb={5}>
            <div className="position-relative mb-4">
              <img className="img-fluid rounded w-100" src={Blog2} alt="Blog post 2: Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum" />
              <div className="blog-date">
                <h4 className="font-weight-bold mb-n1">01</h4>
                <small className="text-uppercase">Jan</small>
              </div>
            </div>
            <h5 className="font-weight-medium mb-4">
              Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
            </h5>
            <Button
              variant="custom"
              size="sm"
              className="py-2"
              href=""
            >
              Read More
            </Button>
          </Col>
          <Col lg={4} mb={5}>
            <div className="position-relative mb-4">
              <img className="img-fluid rounded w-100" src={Blog3} alt="Blog post 3: Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum" />
              <div className="blog-date">
                <h4 className="font-weight-bold mb-n1">01</h4>
                <small className="text-uppercase">Jan</small>
              </div>
            </div>
            <h5 className="font-weight-medium mb-4">
              Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
            </h5>
            <Button
              variant="outline-primary"
              size="sm"
              className="py-2"
              href=""
            >
              Read More
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
