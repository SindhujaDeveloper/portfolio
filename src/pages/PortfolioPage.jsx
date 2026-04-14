import React from "react";
import { motion } from "framer-motion";
import { Container, Col } from "react-bootstrap";
import portfolioItem1 from "../img/portfolio-1.png";
import portfolioItem2 from "../img/portfolio-2.png";
import portfolioItem3 from "../img/portfolio-3.png";
import portfolioItem4 from "../img/portfolio-4.png";
import portfolioItem5 from "../img/portfolio-2.jpg";
import portfolioItem6 from "../img/portfolio-6.jpg";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      image: portfolioItem1,
      filter: "first",
      url: "https://coffeeshop-pns.netlify.app/",
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
    { image: portfolioItem6, 
      filter: "third", 
      url: "https://openai-funny-chatbot.netlify.app/"
    },
    { image: portfolioItem6, 
     filter: "third", 
     url: "https://face-comparision-with-expression.netlify.app" 
    },
  ];

  return (
    <motion.div className="container-fluid pt-5 pb-3" id="portfolio" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h2 className="section-title mb-5">My Portfolio</h2>
          </Col>
        </Row>
        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4" id="portfolio-flters">
              <li
                className="btn btn-sm btn-outline-primary m-1 active"
                data-filter=".second"
              >
                Development
              </li>
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
              <motion.div className="position-relative overflow-hidden mb-2" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 * index }} viewport={{ once: true }}>
                <img
                  className="img-fluid rounded w-100"
                  src={item.image}
                  alt="Portfolio item"
                  loading="lazy"
                  decoding="async"
                  style={{ height: "300px" }}
                />
                <motion.div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center"
                  whileHover={{ scale: 1.08, boxShadow: "0 4px 32px 0 rgba(60,72,88,0.18)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.url}
                    data-lightbox="portfolio"
                  >
                    <i
                      className="fa fa-plus "
                      style={{ fontSize: 60 }}
                    />
                  </a>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};

export default PortfolioPage;
