import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";

const title = "Ananda | Full-Stack Developer";
const description =
  "Computer Science and Engineering student and Full-Stack Developer specializing in modern web application development using the MERN stack.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Ananda, Full-Stack Developer, MERN Stack, React.js, Node.js, Express.js, MongoDB, Computer Science student, portfolio, Mangaluru",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ananda",
          jobTitle: "Full-Stack Developer",
          email: "mailto:anandaj6002@gmail.com",
          address: { "@type": "PostalAddress", addressLocality: "Mangaluru", addressRegion: "Karnataka", addressCountry: "India" },
          sameAs: ["https://github.com/Ananda6002", "https://linkedin.com/in/ananda-j-48b234293"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
