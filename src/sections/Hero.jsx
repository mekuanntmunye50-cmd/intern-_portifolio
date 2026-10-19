import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/config";
import profileImg from "../assets/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-sky-400 font-medium text-sm md:text-base mb-3 tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Mekuannt Munye
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-medium gradient-text">
              {personalInfo.headline}
            </p>
            <p className="mt-6 text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Software Engineering student passionate about building responsive
              web applications and solving real-world problems through clean
              code. Currently focused on full-stack development and preparing
              for a software development internship.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn-primary">
                View My Projects
                <ArrowRight size={18} />
              </a>
              <a href={personalInfo.cvPath} download className="btn-secondary">
                <Download size={18} />
                Download CV
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                Contact Me
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-sky-300 hover:border-sky-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-slate-700 text-slate-400 hover:text-sky-300 hover:border-sky-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
            </div>
          </motion.div>

          {/* Circular Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400 via-cyan-300 to-violet-500 opacity-80 blur-[2px]" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-navy-900 shadow-2xl shadow-sky-500/20">
                <img
                  src={profileImg}
                  alt="Mekuannt Munye - Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-navy-900 border border-sky-500/40 text-sky-300 text-sm font-medium shadow-lg whitespace-nowrap">
                Full-Stack Developer
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
