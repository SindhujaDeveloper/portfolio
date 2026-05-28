"use client";
import React from "react";
import { FaBriefcase, FaCode, FaRocket, FaGraduationCap, FaBook } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Developer",
      company: "Coretopia Technologies",
      period: "October 2025 - Present",
      description: "Building responsive and performant web applications focusing on React, modern Javascript, and seamless user experiences. Collaborating closely with teams to deliver high-quality digital solutions.",
      icon: <FaBriefcase />,
      current: true
    },
    {
      role: "Software Developer - Applications",
      company: "Aximsoft India Pvt Ltd",
      period: "December 2017 - October 2025",
      description: "Joined as a Software Trainee specializing in React JS and React Bootstrap. Learned to develop interactive and responsive front-end interfaces. Gained hands-on experience in coding, testing, and problem-solving while working alongside experienced developers.",
      icon: <FaCode />,
      current: false
    },
    {
      role: "Junior Developer",
      company: "Towno",
      period: "April 2017 - December 2017",
      description: "Assisted in building and maintaining web applications, translating UI/UX designs into functional components. Collaborated with the team, wrote clean code, and troubleshot issues to create seamless user experiences.",
      icon: <FaRocket />,
      current: false
    }
  ];

  const education = [
    {
      degree: "Bachelor's In CSE",
      institution: "Anna University",
      period: "2017 - 2021",
      description: "Explore the digital frontier with a CSE degree. Master programming, algorithms, and cutting-edge tech. Built projects and gained industry insight as a gateway to innovation.",
      icon: <FaGraduationCap />
    },
    {
      degree: "Bio-Maths - 12th Standard",
      institution: "Bharathi Institutions",
      period: "2016 - 2017",
      description: "Discovered the synergy of biology and mathematics in the Bio-Maths program. Explored mathematical models behind biological phenomena, from genetics to ecosystems.",
      icon: <FaBook />
    }
  ];

  return (
    <section className="section experience-section container" id="experience">
       <div className="pt-5">
        <div className="experience-header">
          <h2 className="section-title">My Experience</h2>
          {/* <p className="section-subtitle-text">Professional journey and career milestones</p> */}
        </div>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-icon">{exp.icon}</div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="timeline-content">
                <div className="timeline-card">
                  {exp.current && <span className="current-badge">Current Role</span>}
                  <h5 className="exp-role">{exp.role}</h5>
                  <div className="exp-meta">
                    <span className="company-name">{exp.company}</span>
                    <span className="period-divider"></span>
                    <span className="period-text">{exp.period}</span>
                  </div>
                  <p className="exp-desc">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider" style={{ margin: '80px auto' }}></div>

      <div className="py-5">
        <div className="experience-header">
          <h2 className="section-title">My Education</h2>
        </div>

        <div className="education-row-container mt-5">
          <Row className="g-4">
            {education.map((edu, index) => (
              <Col key={index} md={6} className="">
                <div className="education-card-wrapper h-100">
                  <div className="timeline-card education-card h-100 d-flex flex-row p-4">
                    <div className="timeline-icon education-icon mb-0">
                      {edu.icon}
                    </div>
                    <div className="ps-3">
                    <h5 className="exp-role">{edu.degree}</h5>
                    <div className="exp-meta mb-0">
                      <span className="company-name">{edu.institution}</span>
                      <span className="period-divider"></span>
                      <span className="period-text">{edu.period}</span>
                    </div>
                    </div>
                    {/* <p className="exp-desc">{edu.description}</p> */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
}
