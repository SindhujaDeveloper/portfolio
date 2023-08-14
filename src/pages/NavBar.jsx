import React, { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  const [activeNavItem, setActiveNavItem] = useState("");
  const [toggle, setToggle] = useState(false);

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
  
  return (
    <Navbar
      expand="lg"
      bg="light"
      className={`navbar fixed-top shadow-sm ${toggle ? "visible" : "hidden"}`}
    >
      <Navbar.Brand href="index.html" className="navbar-brand ml-lg-3">
        <h1 className="m-0 display-5">
          <span className="text-primary">Free</span>Folio
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
        <Nav className="navbar-nav m-auto py-0">
          <Nav.Link
            href="#home"
            className={`nav-item nav-link ${
              activeNavItem === "#home" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={`nav-item nav-link ${
              activeNavItem === "#about" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#qualification"
            className={`nav-item nav-link ${
              activeNavItem === "#qualification" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#qualification")}
          >
            Qualification
          </Nav.Link>
          <Nav.Link
            href="#skill"
            className={`nav-item nav-link ${
              activeNavItem === "#skill" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#skill")}
          >
            Skill
          </Nav.Link>
          <Nav.Link
            href="#service"
            className={`nav-item nav-link ${
              activeNavItem === "#service" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#service")}
          >
            Service
          </Nav.Link>
          <Nav.Link
            href="#portfolio"
            className={`nav-item nav-link ${
              activeNavItem === "#portfolio" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#portfolio")}
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
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
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className={`nav-item nav-link ${
              activeNavItem === "#contact" ? "active" : ""
            }`}
            onClick={() => handleNavItemClick("#contact")}
          >
            Contact
          </Nav.Link>
          {/* Repeat similar Nav.Link components for other menu items */}
        </Nav>
        <Button
          href=""
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
