"use client";
import React from "react";
import { Button } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="section-title">About Me</h2>
          <h4 className="about-subtitle">Let me introduce myself!</h4>
          <p className="about-copy">
            I'm a passionate MERN Stack developer with expertise in building
            dynamic and responsive web applications. I enjoy turning ideas into
            polished interfaces and reliable backends using the MERN stack.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
            <Button className="glow-btn">Read More</Button>
            <Button className="outline-glow">Download CV</Button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="about-card card-project">
            <div className="about-image">
              <img src="/hero-illustration.svg" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
