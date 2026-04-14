import React, { useState, useEffect } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for theme preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleNavItemClick = (hash) => {
    if (hash !== "") {
      const offset = 145; // Adjust as needed
      window.scrollTo({
        top: document.querySelector(hash).offsetTop + offset,
        behavior: "smooth",
      });
      setActiveNavItem(hash);
      setToggle(false);
    }
  };

  // Responsive: collapse menu on nav click (mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) setToggle(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="light"
      className={`navbar fixed-top shadow-sm ${toggle ? "visible" : "hidden"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Navbar.Brand href="#home" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">Sindhuja's</span> Portfolio
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarCollapse"
        onClick={() => setToggle(!toggle)}
      />
      <Navbar.Collapse
        id="navbarCollapse"
        className={`px-lg-3 ${toggle ? "show" : ""}`}
      >
        <Nav className="navbar-nav m-auto py-0" role="menubar" aria-label="Main menu">
          <Nav.Link
            href="#home"
            className={`nav-item nav-link ${activeNavItem === "#home" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={`nav-item nav-link ${activeNavItem === "#about" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#experience"
            className={`nav-item nav-link ${activeNavItem === "#experience" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#experience")}
          >
            Experience
          </Nav.Link>
          <Nav.Link
            href="#education"
            className={`nav-item nav-link ${activeNavItem === "#education" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#education")}
          >
            Education
          </Nav.Link>
          <Nav.Link
            href="#skill"
            className={`nav-item nav-link ${activeNavItem === "#skill" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#skill")}
          >
            Skills
          </Nav.Link>
          {/* <Nav.Link
            href="#service"
            className={`nav-item nav-link ${
              activeNavItem === "#service" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#service")}
          >
            Service
          </Nav.Link> */}
          <Nav.Link
            href="#case-studies"
            className={`nav-item nav-link ${activeNavItem === "#case-studies" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#case-studies")}
          >
            Projects
          </Nav.Link>
          {/* <Nav.Link
            href="#testimonial"
            className={`nav-item nav-link ${
              activeNavItem === "#testimonial" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#testimonial")}
          >
            Review
          </Nav.Link>
          <Nav.Link
            href="#blog"
            className={`nav-item nav-link ${
              activeNavItem === "#blog" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#blog")}
          >
            Blog
          </Nav.Link> */}
          <Nav.Link
            href="#contact"
            className={`nav-item nav-link ${activeNavItem === "#contact" ? "active" : ""
              }`}
            onClick={() => handleNavItemClick("#contact")}
          >
            Contact
          </Nav.Link>
          {/* Repeat similar Nav.Link components for other menu items */}
        </Nav>
        {/* Dark mode toggle button */}
        <Nav.Item className="d-flex align-items-center px-2">
          <Button
            variant={darkMode ? "dark" : "outline-dark"}
            className="btn-sm rounded-pill"
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode((prev) => !prev)}
            style={{ minWidth: 40 }}
          >
            {darkMode ? (
              <span role="img" aria-label="Light mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark mode">🌙</span>
            )}
          </Button>
        </Nav.Item>
        <Button
          href="mailto:crazydeveloper.p@gmail.com?subject=Hiring Request"
          variant="outline-primary"
          className="btn d-none d-lg-block"
        >
          Hire Me
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
