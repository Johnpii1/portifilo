import { Github, Mail, MessageCircle } from "lucide-react";
import { contact } from "../data/portfolioData";

export default function SiteFooter() {
  return (
    <footer className="site-footer container">
      <a className="wordmark cursor-pointer" href="#top"><span className="wordmark-icon">J<span>P</span></span><span>johnpaul<span className="accent">.</span></span></a>
      <p>Designed with intention. Built with curiosity.</p>
      <div className="footer-socials">
        <a className="cursor-pointer" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15}/></a>
        <a className="cursor-pointer" href={`mailto:${contact.email}`} aria-label="Email"><Mail size={15}/></a>
        <a className="cursor-pointer" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={15}/></a>
      </div>
      <span className="copyright">© {new Date().getFullYear()} Johnpaul Okoli · Nigeria</span>
    </footer>
  );
}
