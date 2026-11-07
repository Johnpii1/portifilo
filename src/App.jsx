import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Download,
  Github,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  X,
  Sparkles,
  MonitorSmartphone,
  Braces,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Happy Bounty",
    category: "WEB3 PRODUCT",
    description:
      "A multi-chain bounty platform where teams publish tasks with rewards and contributors earn by completing approved work.",
    stack: ["React", "Web3", "Smart contracts"],
    href: "https://botchain-bounty.vercel.app/",
    action: "Explore project",
    visual: "bounty",
  },
  {
    number: "02",
    name: "Open-source work",
    category: "COMMUNITY & COLLABORATION",
    description:
      "Building experience through practical frontend contributions, improving interfaces and learning alongside developer communities.",
    stack: ["JavaScript", "React", "GitHub"],
    href: "https://github.com/Johnpii1",
    action: "View GitHub profile",
    visual: "code",
  },
];

const capabilities = [
  {
    icon: MonitorSmartphone,
    title: "Responsive interfaces",
    text: "Layouts that feel considered and work smoothly across phones, tablets and desktops.",
  },
  {
    icon: Braces,
    title: "Frontend development",
    text: "Clean, reusable components built with modern JavaScript and React.",
  },
  {
    icon: Layers3,
    title: "Product thinking",
    text: "An interest in turning early ideas into useful, understandable digital experiences.",
  },
];

const skills = [
  "HTML5",
  "CSS & Tailwind",
  "JavaScript",
  "React",
  "Responsive Design",
  "Git & GitHub",
  "Web3",
  "UI Implementation",
];

const navigation = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

function SectionLabel({ number, children }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header container">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Johnpaul home">
          <span className="wordmark-icon">J<span>P</span></span>
          <span>johnpaul<span className="accent">.</span></span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-content">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO OPPORTUNITIES
            </div>
            <p className="eyebrow">HELLO, I'M JOHNPAUL OKOLI</p>
            <h1>
              Building for the web,
              <span> with purpose.</span>
            </h1>
            <p className="hero-description">
              I'm a frontend developer who enjoys turning ideas into clear,
              responsive and useful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a
                className="button button-quiet"
                href="/assest/okoli%20sochimaobi.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="hero-bottom">
              <div className="social-links" aria-label="Social links">
                <a href="https://github.com/Johnpii1" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={17} />
                </a>
                <a href="https://wa.me/2347049713444" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <MessageCircle size={17} />
                </a>
                <a href="mailto:okolichimobi08@gmail.com" aria-label="Email">
                  <Mail size={17} />
                </a>
              </div>
              <span className="hero-note">GOOD IDEAS DESERVE GOOD EXECUTION.</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Portrait of Johnpaul Okoli">
            <div className="art-grid" />
            <div className="art-ring art-ring-one" />
            <div className="art-ring art-ring-two" />
            <div className="portrait-frame">
              <img src="/image/IMG_20260114_202638.jpg" alt="Johnpaul Okoli" />
              <div className="portrait-caption">
                <span className="caption-dot" />
                <span>DESIGN MINDED. CODE DRIVEN.</span>
              </div>
            </div>
            <div className="floating-note note-top">
              <Code2 size={17} />
              <span>Building digital things</span>
            </div>
            <div className="floating-note note-bottom">
              <Globe2 size={16} />
              <span>Based in Nigeria</span>
            </div>
            <div className="art-index">JP / 2026</div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={14} />
          </a>
        </section>

        <section className="section-block container" id="about">
          <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
          <div className="about-layout">
            <h2>
              Curious by nature.
              <span>Builder by choice.</span>
            </h2>
            <div className="about-copy">
              <p>
                I'm a frontend developer from Nigeria who enjoys shaping ideas
                into useful digital products. I care about thoughtful
                interfaces, accessible experiences and code that is easy to
                understand and maintain.
              </p>
              <p>
                I'm continuously learning, experimenting with modern tools and
                exploring how technology can solve real problems — including
                opportunities in the Web3 ecosystem.
              </p>
              <a className="text-link" href="#contact">
                A project in mind? Let's connect <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }, index) => (
              <article className="capability-card" key={title}>
                <div className="capability-top">
                  <span>0{index + 1}</span>
                  <Icon size={20} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block container" id="work">
          <SectionLabel number="02">SELECTED WORK</SectionLabel>
          <div className="section-heading-row">
            <h2>Some things I've been <span>working on.</span></h2>
            <p>A selection of projects and practical work from my development journey.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number} / FEATURED</span>
                  <ArrowUpRight size={18} />
                </div>
                <div className={`project-visual ${project.visual}`}>
                  {project.visual === "bounty" ? (
                    <div className="bounty-visual-content">
                      <div className="bounty-symbol"><Layers3 size={36} /></div>
                      <strong>HAPPY BOUNTY</strong>
                      <span>TASKS · COMMUNITY · REWARDS</span>
                    </div>
                  ) : (
                    <div className="code-visual-content">
                      <div className="code-window">
                        <div className="window-dots"><i /><i /><i /></div>
                        <code><span>const</span> keepBuilding = <b>true</b>;</code>
                        <code><span>while</span> (keepBuilding) {"{"}</code>
                        <code className="code-indent">learn(); create(); improve();</code>
                        <code>{"}"}</code>
                      </div>
                    </div>
                  )}
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="text-link" href={project.href} target="_blank" rel="noreferrer">
                  {project.action} <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
          <a className="github-more" href="https://github.com/Johnpii1" target="_blank" rel="noreferrer">
            More on GitHub <ArrowRight size={16} />
          </a>
        </section>

        <section className="section-block container" id="skills">
          <SectionLabel number="03">TOOLS & TECHNOLOGIES</SectionLabel>
          <div className="skills-layout">
            <div className="skills-intro">
              <div className="skills-icon"><Braces size={24} /></div>
              <h2>My toolkit is <span>always growing.</span></h2>
              <p>
                I keep learning by building, testing ideas and working with
                tools that help create better experiences for the web.
              </p>
              <div className="learning-note"><Sparkles size={15} /> Learning is part of the process.</div>
            </div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill}>
                  <span className="skill-number">0{index + 1}</span>
                  <strong>{skill}</strong>
                  <Check size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div className="contact-panel">
            <div className="contact-orb" />
            <SectionLabel number="04">HAVE A PROJECT IN MIND?</SectionLabel>
            <h2>Let's make something <span>meaningful.</span></h2>
            <p>
              Have an idea, an opportunity or just want to connect? I'd be glad
              to hear from you.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:okolichimobi08@gmail.com">
                Send me an email <ArrowUpRight size={17} />
              </a>
              <a className="button button-quiet" href="https://wa.me/2347049713444" target="_blank" rel="noreferrer">
                Chat on WhatsApp <MessageCircle size={17} />
              </a>
            </div>
            <a className="contact-email" href="mailto:okolichimobi08@gmail.com">
              okolichimobi08@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <a className="wordmark" href="#top">
          <span className="wordmark-icon">J<span>P</span></span>
          <span>johnpaul<span className="accent">.</span></span>
        </a>
        <p>Designed with intention. Built with curiosity.</p>
        <span className="copyright">© {new Date().getFullYear()} Johnpaul Okoli · Nigeria</span>
      </footer>
    </div>
  );
}

export default App;
