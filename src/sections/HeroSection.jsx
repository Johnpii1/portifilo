import { ArrowDown, ArrowUpRight, Code2, Download, Github, Mail, MapPin, MessageCircle, Linkedin } from "lucide-react";
import { contact } from "../data/portfolioData";

export default function HeroSection() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content reveal">
        <div className="availability"><span className="availability-dot"/> OPEN TO OPPORTUNITIES</div>
        <p className="eyebrow">HELLO, I'M JOHNPAUL OKOLI</p>
        <h1>Building for the web,<span> with purpose.</span></h1>
        <p className="hero-description">I'm a frontend developer who enjoys turning ideas into clear, responsive and useful digital experiences.</p>
        <div className="hero-actions">
          <a className="button button-primary cursor-pointer" href="#work">Explore my work <ArrowUpRight size={17}/></a>
          <a className="button button-quiet cursor-pointer" href="/assest/okoli%20sochimaobi.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download CV</a>
        </div>
        <div className="hero-bottom">
          <div className="social-links">
            <a className="cursor-pointer" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a>
            <a className="cursor-pointer" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17}/></a>
            <a className="cursor-pointer" href={`mailto:${contact.email}`} aria-label="Email"><Mail size={17}/></a>
            <a className="cursor-pointer" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
          </div>
          <span className="hero-note">GOOD IDEAS DESERVE GOOD EXECUTION.</span>
        </div>
      </div>
      <div className="hero-art reveal" aria-label="Portrait of Johnpaul Okoli">
        <div className="art-grid"/><div className="art-ring art-ring-one"/><div className="art-ring art-ring-two"/>
        <div className="portrait-frame">
          <img src="/image/IMG_20260114_202638.jpg" alt="Portrait of Johnpaul Okoli"/>
          <div className="portrait-caption"><span className="caption-dot"/><span>DESIGN MINDED. CODE DRIVEN.</span></div>
        </div>
        <div className="floating-note note-top"><Code2 size={17}/><span>Building digital things</span></div>
        <div className="floating-note note-bottom"><MapPin size={16}/><span>Based in Nigeria</span></div>
        <div className="art-index">JP / 2026</div>
      </div>
      <a className="scroll-cue cursor-pointer" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
    </section>
  );
}
