import "./App.css";
import React, { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import SkillPage from "./pages/SkillsPage";
// import PortfolioPage from "./pages/PortfolioPage";
import CaseStudiesSection from "./pages/CaseStudiesSection";
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
    <div className="App" aria-label="Main content">
      <>
        <NavBar />
        <Header />
        <AboutPage />
        <ExperiencePage />
        <EducationPage />
        <SkillPage />
        <CaseStudiesSection />
        <ContactPage />
        <Footer />
        {/* Scroll to Bottom */}
        {window.scrollY > 100 && navbarVisible ? null : (
          <Button
            className={`${window.scrollY > 100 ? "hidden" : "visible"}`}
            onClick={() => window.scrollTo({ top: 3900, behavior: "smooth" })}
          >
            <i
              className={`fa fa-2x fa-angle-down  scroll-to-bottom `}
            />
          </Button>
        )}
        {/* Back to Top */}
        {window.scrollY > 200 ? (
          <Button
            className={`btn btn-outline-dark px-0 back-to-top ${window.scrollY > 100 ? "hidden" : "visible"
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
