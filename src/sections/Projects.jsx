import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-navy-900/30">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects that showcase my practical development skills"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Repository and live demo links can be added in{" "}
          <code className="text-sky-400/80">src/data/projects.js</code>
        </p>
      </div>
    </section>
  );
}
