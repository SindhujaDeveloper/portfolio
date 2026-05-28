"use client";
import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card-premium glass-card overflow-hidden h-100">
      <div className="project-image-wrapper">
        <div className="project-overlay">
          <div className="project-links d-flex gap-3">
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link-icon">
              <FaGithub />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link-icon">
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div 
          className="project-placeholder-bg" 
          style={{ background: `linear-gradient(135deg, var(--portfolio-mid), var(--portfolio-mid-2))` }}
        >
          <span className="text-white-50">{project.title.charAt(0)}</span>
        </div>
      </div>
      
      <div className="project-body p-4">
        <h4 className="project-title-text text-white mb-3">{project.title}</h4>
        <p className="project-description-text text-secondary mb-4">
          {project.description}
        </p>
        <div className="project-tech-tags d-flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t, i) => (
            <Badge key={i} bg="transparent" className="tech-badge">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Titan",
      description: "A full-featured MERN stack marketplace with real-time inventory, Stripe integration, and a sleek admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      link: "#",
      github: "#",
      image: "bg-1"
    },
    {
      title: "Pulse Social",
      description: "Next-gen social networking platform with instant messaging, media sharing, and AI-driven content discovery.",
      tech: ["Next.js", "Socket.io", "Firebase", "Tailwind"],
      link: "#",
      github: "#",
      image: "bg-2"
    },
    {
      title: "TaskFlow Pro",
      description: "Enterprise-grade project management tool featuring drag-and-drop boards, analytics, and team collaboration.",
      tech: ["TypeScript", "Express", "PostgreSQL", "MUI"],
      link: "#",
      github: "#",
      image: "bg-3"
    }
  ];

  return (
    <section id="projects" className="section py-5">
      <Container>
        <span className="section-subtitle">Portfolio Highlights</span>
        <h3 className="section-title">Latest Projects</h3>
        
        <Row className="g-4 mt-2">
          {projects.map((p, idx) => (
            <Col key={idx} lg={4} md={6}>
              <ProjectCard project={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
