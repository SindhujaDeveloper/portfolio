"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiRedux, SiTailwindcss, SiGit } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const swiperRef = useRef<any>(null);

  const skills = [
    { title: "MongoDB", desc: "NoSQL Database", icon: <SiMongodb color="#3FAA35" />, bg: 'rgba(63, 170, 53, 0.1)' },
    { title: "Express.js", desc: "Backend Framework", icon: <SiExpress color="#ffffff" />, bg: 'rgba(255, 255, 255, 0.1)' },
    { title: "React.js", desc: "Frontend Library", icon: <SiReact color="#61dafb" />, bg: 'rgba(97, 218, 251, 0.1)' },
    { title: "Node.js", desc: "JS Runtime", icon: <SiNodedotjs color="#8cc84b" />, bg: 'rgba(140, 200, 75, 0.1)' },
    { title: "TypeScript", desc: "Type Safety", icon: <SiTypescript color="#3178c6" />, bg: 'rgba(49, 120, 198, 0.1)' },
    { title: "Redux", desc: "State Management", icon: <SiRedux color="#764abc" />, bg: 'rgba(118, 74, 188, 0.1)' },
    { title: "Tailwind CSS", desc: "Styling Framework", icon: <SiTailwindcss color="#06b6d4" />, bg: 'rgba(6, 182, 212, 0.1)' },
    { title: "Git", desc: "Version Control", icon: <SiGit color="#f05032" />, bg: 'rgba(240, 80, 50, 0.1)' },
  ];

  const slides = [...skills, ...skills];

  return (
    <section id="skills" className="section py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Technical Arsenal</span>
          <h3 className="section-title">My Skills</h3>
        </motion.div>
        
        <motion.div
          className="skills-carousel mt-5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ 
              delay: 0, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            speed={4000}
            onSwiper={(sw) => { swiperRef.current = sw; }}
            className="skills-swiper"
          >
            {slides.map((s, idx) => (
              <SwiperSlide key={idx} style={{ width: 260 }}>
                <motion.div 
                  className="skill-card glass-card p-4 text-center"
                  whileHover={{ y: -5 }}
                >
                  <div 
                    className="skill-icon-wrapper mb-3 mx-auto" 
                    style={{ background: s.bg }}
                  >
                    <div className="skill-icon fs-2 d-flex align-items-center justify-content-center h-100">
                      {s.icon}
                    </div>
                  </div>
                  <h5 className="skill-title text-white mb-2">{s.title}</h5>
                  <p className="skill-desc text-muted mb-0">{s.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
