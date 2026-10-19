import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding bg-navy-900/30">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="A bit about my journey as a developing software engineer"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card p-8 md:p-10 space-y-5 text-slate-300 leading-relaxed">
            <p>
              I'm a Software Engineering student focused on becoming a capable
              full-stack developer. My journey has been driven by curiosity and
              a genuine interest in building things that work — from responsive
              user interfaces to backend logic and database integration.
            </p>
            <p>
              Through hands-on projects such as an Amazon-inspired e-commerce
              app, a community forum, and a Netflix-style interface, I've
              practiced modern frontend techniques with React, explored backend
              development with Node.js and Express, and worked with databases
              like MySQL and Firebase.
            </p>
            <p>
              I value clean code, continuous learning, and solving real
              problems. I'm actively preparing for a software development
              internship where I can contribute, learn from experienced
              engineers, and grow as a professional developer.
            </p>
            <p className="text-sky-300/90 font-medium">
              Always open to feedback, collaboration, and opportunities to
              improve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
