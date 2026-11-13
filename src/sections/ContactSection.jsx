import { ArrowUpRight, MessageCircle } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { contact } from "../data/portfolioData";

export default function ContactSection() {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-panel reveal">
        <div className="contact-orb"/>
        <SectionLabel number="07">HAVE A PROJECT IN MIND?</SectionLabel>
        <h2>Let's make something <span>meaningful.</span></h2>
        <p>Have an idea, an opportunity or just want to connect? I'd be glad to hear from you.</p>
        <div className="contact-actions">
          <a className="button button-primary cursor-pointer" href={`mailto:${contact.email}?subject=Let's%20work%20together`}>Send me an email <ArrowUpRight size={17}/></a>
          <a className="button button-quiet cursor-pointer" href={contact.whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <MessageCircle size={17}/></a>
        </div>
        <a className="contact-email cursor-pointer" href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </section>
  );
}
