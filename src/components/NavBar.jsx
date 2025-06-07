import { useState, useEffect } from "react";
import { Send } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { navLinks } from "../constants/index";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
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

        <a href="#contact" className="contact-btn group">
          <div className="inner gap-2">
            <span>Telegram</span> <Send strokeWidth={2.5} />
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
