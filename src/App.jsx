import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Code2, Download,
  Github, Globe2, Layers3, Mail, Menu, MessageCircle, X, Sparkles,
  MonitorSmartphone, Braces, Palette, Rocket, Lightbulb, Send,
  ExternalLink, Linkedin, Instagram, MapPin, Clock3, ChevronUp,
  Terminal, Cpu, Workflow, Zap, BookOpen, Coffee, MousePointer2
} from "lucide-react";

const projects = [
  {
    number: "01", name: "Happy Bounty", category: "WEB3 · PRODUCT",
    description: "A multi-chain bounty platform where creators publish tasks with rewards and contributors earn by completing approved work.",
    stack: ["React", "Web3", "Smart contracts"], href: "https://botchain-bounty.vercel.app/",
    action: "Explore live project", visual: "bounty", status: "LIVE"
  },
  {
    number: "02", name: "Developer portfolio", category: "PERSONAL · FRONTEND",
    description: "A personal space to share my work, document what I'm learning and make it easier for people to connect with me.",
    stack: ["React", "Vite", "CSS"], href: "https://github.com/Johnpii1/portifilo",
    action: "View source code", visual: "portfolio", status: "IN PROGRESS"
  },
  {
    number: "03", name: "Open-source contributions", category: "COMMUNITY · DEVELOPMENT",
    description: "Learning through practical contributions, collaborating with developers and improving real-world frontend interfaces.",
    stack: ["JavaScript", "React", "GitHub"], href: "https://github.com/Johnpii1",
    action: "Explore GitHub", visual: "code", status: "ONGOING"
  },
  {
    number: "04", name: "Your next project", category: "IDEA · YOUR PROJECT",
    description: "This space is ready for another project. Replace this card with a product, experiment or client project you want to showcase.",
    stack: ["Add your tools", "Add your role"], href: "mailto:okolichimobi08@gmail.com",
    action: "Discuss a project", visual: "next", status: "YOUR SLOT"
  },
];

const skills = [
  { name: "HTML5", level: "Frontend foundation", icon: Code2 },
  { name: "CSS & Tailwind", level: "Styling and layout", icon: Palette },
  { name: "JavaScript", level: "Programming", icon: Braces },
  { name: "React", level: "Frontend development", icon: Layers3 },
  { name: "Responsive design", level: "Mobile-first interfaces", icon: MonitorSmartphone },
  { name: "Git & GitHub", level: "Version control", icon: Github },
  { name: "Web3", level: "Blockchain applications", icon: Globe2 },
  { name: "UI implementation", level: "Design to code", icon: Workflow },
];

const services = [
  { icon: MonitorSmartphone, title: "Responsive websites", text: "Clean, mobile-friendly websites that adapt naturally to different screen sizes." },
  { icon: Braces, title: "React development", text: "Reusable components and interactive interfaces built with modern frontend tools." },
  { icon: Palette, title: "Landing pages & UI", text: "Clear layouts that present your product, service or idea with purpose." },
  { icon: Rocket, title: "MVP interfaces", text: "Early product experiences that help teams communicate an idea and test it with users." },
];

const process = [
  ["01", "Understand", "Get clear on the goal, audience and problem the product needs to solve."],
  ["02", "Plan", "Break the idea into useful sections, user journeys and a practical build plan."],
  ["03", "Build", "Develop the interface with responsive layouts and reusable components."],
  ["04", "Refine", "Test, improve the details and make the experience feel complete."],
];

const focusAreas = [
  { icon: Cpu, title: "Frontend engineering", text: "Growing stronger with React, JavaScript and maintainable component architecture." },
  { icon: Globe2, title: "Web3 products", text: "Exploring how blockchain can support useful products and new digital opportunities." },
  { icon: Lightbulb, title: "Problem solving", text: "Learning to identify real user problems and turn them into practical solutions." },
];

const navigation = [
  ["About", "#about"], ["Services", "#services"], ["Work", "#work"],
  ["Skills", "#skills"], ["Journey", "#journey"], ["Contact", "#contact"],
];

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
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
    <div className="site-shell" id="top">
      <header className="site-header container">
        <a className="wordmark cursor-pointer" href="#top" onClick={closeMenu} aria-label="Johnpaul home">
          <span className="wordmark-icon">J<span>P</span></span><span>johnpaul<span className="accent">.</span></span>
        </a>
        <button className="mobile-menu-button cursor-pointer" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map(([label, href]) => <a className="cursor-pointer" key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="header-cta cursor-pointer" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content reveal">
            <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, I'M JOHNPAUL OKOLI</p>
            <h1>Building for the web,<span> with purpose.</span></h1>
            <p className="hero-description">I'm a frontend developer who enjoys turning ideas into clear, responsive and useful digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary cursor-pointer" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet cursor-pointer" href="/assest/okoli%20sochimaobi.pdf" target="_blank" rel="noreferrer"><Download size={16} /> Download CV</a>
            </div>
            <div className="hero-bottom">
              <div className="social-links">
                <a className="cursor-pointer" href="https://github.com/Johnpii1" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
                <a className="cursor-pointer" href="https://wa.me/2347049713444" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17} /></a>
                <a className="cursor-pointer" href="mailto:okolichimobi08@gmail.com" aria-label="Email"><Mail size={17} /></a>
                <a className="cursor-pointer" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
              </div>
              <span className="hero-note">GOOD IDEAS DESERVE GOOD EXECUTION.</span>
            </div>
          </div>

          <div className="hero-art reveal" aria-label="Portrait of Johnpaul Okoli">
            <div className="art-grid" /><div className="art-ring art-ring-one" /><div className="art-ring art-ring-two" />
            <div className="portrait-frame">
              <img src="/image/IMG_20260114_202638.jpg" alt="Portrait of Johnpaul Okoli" />
              <div className="portrait-caption"><span className="caption-dot" /><span>DESIGN MINDED. CODE DRIVEN.</span></div>
            </div>
            <div className="floating-note note-top"><Code2 size={17} /><span>Building digital things</span></div>
            <div className="floating-note note-bottom"><MapPin size={16} /><span>Based in Nigeria</span></div>
            <div className="art-index">JP / 2026</div>
          </div>
          <a className="scroll-cue cursor-pointer" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <div className="marquee-strip" aria-label="Areas of interest">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, index) => <div className="marquee-group" key={index}>
              <span>FRONTEND DEVELOPMENT</span><i /><span>REACT & JAVASCRIPT</span><i /><span>WEB3 EXPERIENCES</span><i /><span>CREATIVE PROBLEM SOLVING</span><i /><span>ALWAYS LEARNING</span><i />
            </div>)}
          </div>
        </div>

        <section className="section-block container" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-layout reveal">
            <h2>Curious by nature.<span>Builder by choice.</span></h2>
            <div className="about-copy">
              <p>I'm a frontend developer from Nigeria who enjoys shaping ideas into useful digital products. I care about thoughtful interfaces, accessible experiences and code that is easy to understand and maintain.</p>
              <p>I'm continuously learning, experimenting with modern tools and exploring how technology can solve real problems — including opportunities in the Web3 ecosystem.</p>
              <a className="text-link cursor-pointer" href="#contact">A project in mind? Let's connect <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="about-facts reveal">
            <div><span className="fact-icon"><MapPin size={16} /></span><small>LOCATION</small><strong>Nigeria</strong></div>
            <div><span className="fact-icon"><Code2 size={16} /></span><small>FOCUS</small><strong>Frontend development</strong></div>
            <div><span className="fact-icon"><Coffee size={16} /></span><small>CURRENT MODE</small><strong>Learning by building</strong></div>
            <div><span className="fact-icon"><Clock3 size={16} /></span><small>AVAILABILITY</small><strong>Open to opportunities</strong></div>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, title, text }, index) => <article className="focus-card reveal" key={title}>
              <div className="capability-top"><span>0{index + 1}</span><Icon size={20} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </section>

        <section className="section-block container" id="services">
          <SectionLabel number="02">WHAT I CAN HELP WITH</SectionLabel>
          <div className="section-heading-row reveal">
            <h2>Turning ideas into <span>real experiences.</span></h2>
            <p>Areas where I can contribute, collaborate and keep growing through practical work.</p>
          </div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }, index) => <article className="service-card reveal" key={title}>
              <div className="service-icon"><Icon size={22} /></div><span className="service-number">0{index + 1} / SERVICE</span>
              <h3>{title}</h3><p>{text}</p><a className="service-arrow cursor-pointer" href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={18} /></a>
            </article>)}
          </div>
        </section>

        <section className="section-block container" id="work">
          <SectionLabel number="03">SELECTED WORK</SectionLabel>
          <div className="section-heading-row reveal">
            <h2>Some things I've been <span>working on.</span></h2>
            <p>A selection of projects and practical work from my development journey. Feel free to explore the live work and source code.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => <article className="project-card reveal" key={project.number}>
              <div className="project-card-top"><span>{project.number} / FEATURED</span><span className="project-status">{project.status}</span></div>
              <div className={`project-visual ${project.visual}`}>
                {project.visual === "bounty" && <div className="bounty-visual-content"><div className="bounty-symbol"><Layers3 size={36} /></div><strong>HAPPY BOUNTY</strong><span>TASKS · COMMUNITY · REWARDS</span></div>}
                {project.visual === "portfolio" && <div className="portfolio-visual-content"><div className="portfolio-mini"><span>JP.</span><div /><div /><div /></div><strong>PERSONAL PORTFOLIO</strong></div>}
                {project.visual === "code" && <div className="code-visual-content"><div className="code-window"><div className="window-dots"><i /><i /><i /></div><code><span>const</span> keepBuilding = <b>true</b>;</code><code><span>while</span> (keepBuilding) {"{"}</code><code className="code-indent">learn(); create(); improve();</code><code>{"}"}</code></div></div>}
                {project.visual === "next" && <div className="next-visual-content"><Sparkles size={34} /><strong>YOUR NEXT BIG IDEA</strong><span>ADD YOUR PROJECT HERE</span></div>}
              </div>
              <p className="project-category">{project.category}</p><h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="text-link cursor-pointer" href={project.href} target="_blank" rel="noreferrer">{project.action} <ExternalLink size={14} /></a>
            </article>)}
          </div>
          <a className="github-more cursor-pointer" href="https://github.com/Johnpii1" target="_blank" rel="noreferrer">Explore more on GitHub <ArrowRight size={16} /></a>
        </section>

        <section className="section-block container" id="skills">
          <SectionLabel number="04">TOOLS & TECHNOLOGIES</SectionLabel>
          <div className="skills-layout reveal">
            <div className="skills-intro">
              <div className="skills-icon"><Braces size={24} /></div>
              <h2>My toolkit is <span>always growing.</span></h2>
              <p>I keep learning by building, testing ideas and working with tools that help create better experiences for the web.</p>
              <div className="learning-note"><Sparkles size={15} /> Learning is part of the process.</div>
            </div>
            <div className="skills-list">
              {skills.map(({ name, level, icon: Icon }, index) => <div className="skill-row" key={name}>
                <span className="skill-number">0{index + 1}</span><span className="skill-icon"><Icon size={16} /></span>
                <div><strong>{name}</strong><small>{level}</small></div><Check size={15} />
              </div>)}
            </div>
          </div>
        </section>

        <section className="section-block container" id="journey">
          <SectionLabel number="05">HOW I WORK</SectionLabel>
          <div className="section-heading-row reveal">
            <h2>A thoughtful process.<span>Better outcomes.</span></h2>
            <p>A simple approach that keeps the goal clear from the first conversation to the final details.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, text]) => <article className="process-step reveal" key={number}>
              <span className="process-number">{number}</span><div className="process-line" /><h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
          <div className="journey-note reveal">
            <div className="journey-note-icon"><BookOpen size={22} /></div>
            <div><span>MY DEVELOPMENT JOURNEY</span><h3>Learning, building and improving — one project at a time.</h3><p>I'm growing through hands-on projects, independent learning and collaboration. This section can be updated with formal work experience, education and certifications as I add them.</p></div>
          </div>
        </section>

        <section className="section-block container" id="beyond-code">
          <SectionLabel number="06">BEYOND THE CODE</SectionLabel>
          <div className="beyond-layout reveal">
            <div><h2>Good technology starts with <span>understanding people.</span></h2><p>I'm interested in more than making interfaces look good. I want to understand the people using what I build, the challenges they face and how technology can make a practical difference.</p></div>
            <div className="values-list">
              <div><span>01</span><strong>Stay curious</strong><small>Keep asking questions and learning new things.</small></div>
              <div><span>02</span><strong>Build with purpose</strong><small>Focus on solving a real problem, not just adding features.</small></div>
              <div><span>03</span><strong>Improve together</strong><small>Share ideas, accept feedback and grow through collaboration.</small></div>
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-orb" />
            <SectionLabel number="07">HAVE A PROJECT IN MIND?</SectionLabel>
            <h2>Let's make something <span>meaningful.</span></h2>
            <p>Have an idea, an opportunity or just want to connect? I'd be glad to hear from you.</p>
            <div className="contact-actions">
              <a className="button button-primary cursor-pointer" href="mailto:okolichimobi08@gmail.com?subject=Let's%20work%20together">Send me an email <ArrowUpRight size={17} /></a>
              <a className="button button-quiet cursor-pointer" href="https://wa.me/2347049713444" target="_blank" rel="noreferrer">Chat on WhatsApp <MessageCircle size={17} /></a>
            </div>
            <a className="contact-email cursor-pointer" href="mailto:okolichimobi08@gmail.com">okolichimobi08@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <a className="wordmark cursor-pointer" href="#top"><span className="wordmark-icon">J<span>P</span></span><span>johnpaul<span className="accent">.</span></span></a>
        <p>Designed with intention. Built with curiosity.</p>
        <div className="footer-socials">
          <a className="cursor-pointer" href="https://github.com/Johnpii1" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
          <a className="cursor-pointer" href="mailto:okolichimobi08@gmail.com" aria-label="Email"><Mail size={15} /></a>
          <a className="cursor-pointer" href="https://wa.me/2347049713444" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={15} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Johnpaul Okoli · Nigeria</span>
      </footer>
      {showTop && <a className="back-to-top cursor-pointer" href="#top" aria-label="Back to top"><ChevronUp size={19} /></a>}
    </div>
  );
}

export default App;
