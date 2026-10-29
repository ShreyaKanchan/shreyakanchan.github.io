import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Leadership from "@/components/portfolio/Leadership";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shreya Kanchan — Engineering Ideas Into Impact" },
      {
        name: "description",
        content:
          "Portfolio of Shreya Kanchan — Electronics and Computer Science Engineering student at SIES GST, Navi Mumbai. Hackathon achiever, project builder, and event lead.",
      },
      { property: "og:title", content: "Shreya Kanchan — Engineering Ideas Into Impact" },
      {
        property: "og:description",
        content:
          "Projects, hackathon achievements, and community leadership of an Electronics and Computer Science Engineering student.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Leadership />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
