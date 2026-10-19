import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo, navLinks } from "../data/config";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-18 px-4 sm:px-6">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-sky-300 transition-colors"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-sky-400">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-sky-300 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggleButton theme={theme} onClick={onToggleTheme} />
          <a
            href={personalInfo.cvPath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 transition-all"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-6 bg-navy-950/95 border-b border-slate-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={handleNavClick}
                className="block py-3 px-3 text-slate-300 hover:text-sky-300 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <ThemeToggleButton
              theme={theme}
              onClick={onToggleTheme}
              className="w-full justify-center"
            />
          </li>
          <li className="pt-2">
            <a
              href={personalInfo.cvPath}
              download
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-full bg-sky-500 text-navy-950"
            >
              <Download size={16} />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
