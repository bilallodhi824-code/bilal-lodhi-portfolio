import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Experience } from "@/components/sections/Experience";
import { Awards } from "@/components/sections/Awards";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Skills />
        <Process />
        <Experience />
        <Awards />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
