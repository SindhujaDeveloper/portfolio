import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutSkills from "../components/AboutSkills";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <AboutSkills />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
