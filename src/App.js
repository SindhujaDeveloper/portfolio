import "./App.css";
import React, { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import QualificationPage from "./pages/QualificationPage";
import SkillPage from "./pages/SkillsPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
import NavBar from "./pages/NavBar";
import Header from "./pages/Header";
import { Button } from "react-bootstrap";

function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    // Navbar on scrolling
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <>
        <NavBar />
        <Header />
        <AboutPage />
        <QualificationPage />
        <SkillPage />
        {/* <ServicePage /> */}
        <PortfolioPage />
        {/* <TestimonialPage /> */}
        {/* <BlogPage /> */}
        <ContactPage />
        <Footer />
        {/* Scroll to Bottom */}
        {window.scrollY > 100 && navbarVisible ? null : (
          <i
            className={`fa fa-2x fa-angle-down text-white scroll-to-bottom ${
              window.scrollY > 100 ? "hidden" : "visible"
            }`}
          />
        )}
        {/* Back to Top */}
        {window.scrollY > 200 ? (
          <Button
            className={`btn btn-outline-dark px-0 back-to-top ${
              window.scrollY > 100 ? "hidden" : "visible"
            }`}
            onClick={scrollToTop}
          >
            <i className="fa fa-angle-double-up" />
          </Button>
        ) : null}
      </>
    </div>
  );
}

export default App;
