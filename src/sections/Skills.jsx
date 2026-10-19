import { motion } from "framer-motion";
import { Monitor, Server, Database, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TechnologyIcon from "../components/TechnologyIcon";
import { skillCategories } from "../data/skills";

const iconMap = {
  Monitor,
  Server,
  Database,
  Smartphone,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I've studied and used in projects"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Wrench;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card p-6 hover:border-sky-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group/skill flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-slate-800/60"
                    >
                      <span className="flex items-center gap-2.5 text-slate-300 group-hover/skill:text-white transition-colors">
                        <TechnologyIcon name={skill.name} size={17} />
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500 px-2 py-0.5 rounded bg-slate-800/80">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
