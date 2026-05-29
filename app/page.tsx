import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutSkills from "../components/AboutSkills";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sindhuja Developer - Frontend React Engineer Portfolio",
  description:
    "Explore Sindhuja Developer portfolio built with React, Next.js, Angular and modern UI development skills.",
};

 const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sindhuja Developer",
    url: "https://sindhujadeveloperportfolio.netlify.app/",
    sameAs: [
      "https://github.com/SindhujaDeveloper",
      "https://linkedin.com/in/sindhuja14",
    ],
  };

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <h1 className="d-none">Sindhuja Developer</h1>
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
