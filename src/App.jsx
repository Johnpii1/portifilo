import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import JourneySection from "./sections/JourneySection";
import BeyondCodeSection from "./sections/BeyondCodeSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    const handleScroll = () => setShowTop(window.scrollY > 550);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="site-shell min-h-screen w-full" id="top">
      <SiteHeader />
      <main className="w-full">
        <HeroSection />
        <div className="marquee-strip w-full overflow-hidden" aria-label="Areas of interest">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => (
              <div className="marquee-group" key={index}>
                <span>FRONTEND DEVELOPMENT</span><i/><span>REACT & JAVASCRIPT</span><i/>
                <span>WEB3 EXPERIENCES</span><i/><span>CREATIVE PROBLEM SOLVING</span><i/>
                <span>ALWAYS LEARNING</span><i/>
              </div>
            ))}
          </div>
        </div>
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <BeyondCodeSection />
        <ContactSection />
      </main>
      <SiteFooter />
      {showTop && <a className="back-to-top cursor-pointer transition duration-200 hover:-translate-y-1" href="#top" aria-label="Back to top"><ChevronUp size={19}/></a>}
    </div>
  );
}

export default App;
