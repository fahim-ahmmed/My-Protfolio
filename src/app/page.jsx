import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";

import Footer from "@/components/shared/Footer";
import ScrollTop from "@/components/shared/ScrollTop";
import ScrollProgress from "@/components/shared/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <ScrollTop />
    </>
  );
}