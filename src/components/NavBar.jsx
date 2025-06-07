import { useState, useEffect } from "react";
import { Send } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import navLinks from "../constants/index";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} bg-black`}>
      <div className="inner">
        <a href="/" className="flex justify-center items-center gap-2 logo">
          <Lightbulb size={32} strokeWidth={3} /> Les Bases de l'Islam
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

      <a href="https://t.me/lesbasesdelislam" target="_blank" className="contact-btn group">
        <div className="inner gap-2">
          <span>Telegram</span>
          <Send strokeWidth={2.5} className="transition-colors stroke-black group-hover:stroke-white" />
        </div>
      </a>
      </div>
    </header>
  );
}

export default NavBar;
