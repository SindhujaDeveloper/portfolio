import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Blog1 from "../img/blog-1.jpg";
import Blog2 from "../img/blog-2.jpg";
import Blog3 from "../img/blog-3.jpg";

const BlogPage = () => {
  return (
    <div className="container-fluid pt-5" id="blog">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Blog
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            Latest Blog
          </h1>
        </div>
        <Row>
          <Col lg={4} mb={5}>
            <div className="position-relative mb-4">
              <img className="img-fluid rounded w-100" src={Blog1} alt="" />
              <div className="blog-date">
                <h4 className="font-weight-bold mb-n1">01</h4>
                <small className="text-white text-uppercase">Jan</small>
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
          <Col lg={4} mb={5}>
            <div className="position-relative mb-4">
              <img className="img-fluid rounded w-100" src={Blog2} alt="" />
              <div className="blog-date">
                <h4 className="font-weight-bold mb-n1">01</h4>
                <small className="text-white text-uppercase">Jan</small>
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
          <Col lg={4} mb={5}>
            <div className="position-relative mb-4">
              <img className="img-fluid rounded w-100" src={Blog3} alt="" />
              <div className="blog-date">
                <h4 className="font-weight-bold mb-n1">01</h4>
                <small className="text-white text-uppercase">Jan</small>
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
