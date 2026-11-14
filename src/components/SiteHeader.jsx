import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../data/portfolioData";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="flex justify-center items-center p-10">
    <header className="site-header container flex justify-around items-center  fixed w-full cursor-pointer rounded-3xl border bg-black/100 z-10 p-4">
      <a className="wordmark cursor-pointer" href="#top" onClick={closeMenu} aria-label="Johnpaul home">
        <span className="wordmark-icon">J<span>P</span></span><span>johnpaul<span className="accent">.</span></span>
      </a>
      <button className="mobile-menu-button cursor-pointer" type="button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>
        {menuOpen ? <X size={21}/> : <Menu size={21}/>}
      </button>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
        {navigation.map(([label,href]) => <a className="cursor-pointer" key={label} href={href} onClick={closeMenu}>{label}</a>)}
      </nav>
      <a className="header-cta cursor-pointer" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
    </header>
    </section>
  );
}
