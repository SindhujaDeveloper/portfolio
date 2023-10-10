import React from "react";
import { Container, Col } from "react-bootstrap";
import portfolioItem1 from "../img/portfolio-1.png";
import portfolioItem2 from "../img/portfolio-2.png";
import portfolioItem3 from "../img/portfolio-3.png";
import portfolioItem4 from "../img/portfolio-4.png";
import portfolioItem5 from "../img/portfolio-2.jpg";
// import portfolioItem6 from "../img/portfolio-6.jpg";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      image: portfolioItem1,
      filter: "first",
      url: "https://coffeeshop-pns.netlify.app/",
    },
    {
      image: portfolioItem2,
      filter: "second",
      url: "https://primespot-tech.web.app/",
    },
    {
      image: portfolioItem3,
      filter: "third",
      url: "https://primespot-72d6b.web.app/",
    },
    {
      image: portfolioItem4,
      filter: "first",
      url: "https://2048-new-game.netlify.app/",
    },
    {
      image: portfolioItem5,
      filter: "second",
      url: "https://online-exam-system-public.netlify.app/",
    },
    // { image: portfolioItem5, filter: "second", url: "" },
    // { image: portfolioItem6, filter: "third", url: "" },
  ];

  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <Container>
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1
            className="display-1 text-uppercase text-white"
            style={{ WebkitTextStroke: "1px #dee2e6" }}
          >
            Gallery
          </h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Portfolio
          </h1>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              {/* <li
                className="btn btn-sm btn-outline-primary m-1 active"
                data-filter="*"
              >
                All
              </li> */}
              {/* <li
                className="btn btn-sm btn-outline-primary m-1"
                data-filter=".first"
              >
                Design
              </li> */}
              <li
                className="btn btn-sm btn-outline-primary m-1 active"
                data-filter=".second"
              >
                Development
              </li>
              {/* <li
                className="btn btn-sm btn-outline-primary m-1"
                data-filter=".third"
              >
                Marketing
              </li> */}
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
          {portfolioItems.map((item, index) => (
            <Col
              lg={4}
              md={6}
              className={`mb-4 portfolio-item ${item.filter}`}
              key={index}
            >
              <div className="position-relative overflow-hidden mb-2">
                <img
                  className="img-fluid rounded w-100"
                  src={item.image}
                  alt=""
                  // width="400px"
                  style={{ height: "300px" }}
                />
                <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.url}
                    data-lightbox="portfolio"
                  >
                    <i
                      className="fa fa-plus text-white"
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PortfolioPage;
