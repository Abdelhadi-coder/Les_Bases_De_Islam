import { useState, useEffect } from "react";
import { Moon, Sun, Send, Lightbulb } from 'lucide-react';
import navLinks from "../constants/categories";

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

    const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // return (
  //   <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} bg-black`}>
  //     <div className="inner">
  //       <a href="/" className="flex justify-center items-center gap-2 logo">
  //         <Lightbulb size={32} strokeWidth={3} /> Les Bases de l'Islam
  //       </a>

  //       <nav className="desktop">
  //         <ul>
  //           {navLinks.map(({ name, to }) => (
  //             <li key={name} className="group">
  //               <a href={to}>
  //                 <span>{name}</span>
  //                 <span className="underline" />
  //               </a>
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>

  //       <button
  //         onClick={toggleTheme}
  //         className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:scale-110 ml-4"
  //         aria-label="Toggle Theme"
  //       >
  //         {theme === 'dark' ? (
  //           <Sun className="text-yellow-400" size={20} />
  //         ) : (
  //           <Moon className="text-blue-700" size={20} />
  //         )}
  //       </button>

  //     <a href="https://t.me/lesbasesdelislam" target="_blank" className="contact-btn group">
  //       <div className="inner gap-2">
  //         <span>Telegram</span>
  //         <Send strokeWidth={2.5} className="transition-colors stroke-black group-hover:stroke-white" />
  //       </div>
  //     </a>
  //     </div>
  //   </header>
  // );
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} bg-white shadow-md border-b border-gray-200`}>
      <div className="inner">
        <a href="/" className="flex justify-center items-center gap-2 transition-colors duration-300">
          {/* <Lightbulb size={32} strokeWidth={3} /> */}
            <img
              src="/images/whiteIcone.png"
              alt="Astuce"
              className="w-25 h-25 object-contain p-0 ml-30 absolute"
              // style={{ filter: 'drop-shadow(0 0 2px gray)' }}
            />

          {/* Les Bases de l'Islam */}
        </a>
        <nav className="desktop">
          <ul className="flex ml-44">
            {navLinks.map(({ name, to }) => (
              <li key={name} className="group">
                <a href={to} className="text-gray-700 hover:text-black transition-colors duration-300 relative">
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="https://t.me/lesbasesdelislam"
          target="_blank"
          className="contact-btn group ml-4"
          rel="noreferrer"
        >
          <div className="inner gap-2 bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg flex items-center">
            <span>Telegram</span>
            <Send strokeWidth={2.5} className="transition-colors group-hover:stroke-white stroke-black" />
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
