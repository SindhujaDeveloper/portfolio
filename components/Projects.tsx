"use client";
import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

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
        {project.image && project.image.startsWith('/') ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-100 h-100"
            style={{ objectFit: 'cover', opacity: 0.6 }}
          />
        ) : (
          <div
            className="project-placeholder-bg"
            style={{ background: `linear-gradient(135deg, var(--portfolio-mid), var(--portfolio-mid-2))` }}
          >
            <span className="text-white-50">{project.title.charAt(0)}</span>
          </div>
        )}
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
      title: "NSP Foods Online",
      description: "Lightweight Next.js storefront and admin panel for an online food menu, featuring a sleek dashboard, cart management, and Firebase integration.",
      tech: ["Next.js", "Firebase", "Tailwind", "Radix UI"],
      link: "https://nspfoods01.netlify.app/",
      github: "https://github.com/SindhujaDeveloper/nspfoods_online/tree/development",
      image: "/nspfoods_thumbnail.png"
    },
    {
      title: "Face Recognition System",
      description: "An advanced web application utilizing machine learning for accurate face comparison and real-time facial expression detection.",
      tech: ["Python", "CSS3", "JavaScript", "Face API"],
      link: "https://face-comparision-with-expression.netlify.app/",
      github: "https://github.com/SindhujaDeveloper/face_recognition_system",
      image: "/face_recognition_thumbnail.png"
    },
    {
      title: "2048 Game",
      description: "A sleek, interactive web-based implementation of the classic 2048 puzzle game with smooth animations.",
      tech: ["HTML5", "CSS3", "JavaScript", "Next.js"],
      link: "https://2048-new-game.netlify.app/",
      github: "https://github.com/SindhujaDeveloper/2048-game",
      image: "/2048_game_thumbnail.png"
    }
  ];

  // Stagger animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Portfolio Highlights</span>
          <h3 className="section-title">Latest Projects</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row className="g-4 mt-2">
            {projects.map((p, idx) => (
              <Col key={idx} xs={12} md={6} lg={4}>
                <motion.div variants={cardVariants} className="h-100">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="h-100">
                    <ProjectCard project={p} />
                  </motion.div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
