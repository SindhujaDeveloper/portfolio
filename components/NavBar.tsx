"use client";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/sindhuja14",
  github: "https://github.com/SindhujaDeveloper/",
  instagram: "https://instagram.com/your-profile",
  mail: "mailto:sindhujap255@gmail.com",
};

export default function NavBar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + 100;
      
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth"
      });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      variant="dark" 
      className={`navbar-sticky py-3 ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => handleNav(e, "home")} 
          className="text-white fw-bold fs-4"
          style={{ letterSpacing: '1px' }}
        >
          SINDHUJA<span style={{ color: 'var(--portfolio-glow1)' }}>.</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link href="#about" onClick={(e) => handleNav(e, "about")} className={active === "about" ? "active" : ""}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleNav(e, "skills")} className={active === "skills" ? "active" : ""}>Skills</Nav.Link>
            <Nav.Link href="#experience" onClick={(e) => handleNav(e, "experience")} className={active === "experience" ? "active" : ""}>Experience</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => handleNav(e, "projects")} className={active === "projects" ? "active" : ""}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleNav(e, "contact")} className={active === "contact" ? "active" : ""}>Contact</Nav.Link>
            
            <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
              <a href={SOCIAL.linkedin} className="social-icon" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href={SOCIAL.github} className="social-icon" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href={SOCIAL.mail} className="social-icon"><FaEnvelope /></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
