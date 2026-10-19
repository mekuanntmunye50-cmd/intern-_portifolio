import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code2, Smartphone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const timeline = [
  {
    icon: GraduationCap,
    title: "Software Engineering Studies",
    description:
      "Currently pursuing a Software Engineering program, focusing on core computer science principles, software design, and practical development skills.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Built projects using React for frontend and Node.js / Express for backend. Practiced REST APIs, authentication, and database integration with MySQL and Firebase.",
  },
  {
    icon: BookOpen,
    title: "Frontend Engineering Focus",
    description:
      "Developed responsive interfaces, component-based architecture, and modern UI patterns through Amazon Clone, Netflix Clone, and other practice projects.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development Exploration",
    description:
      "Learning React Native and Expo to expand into cross-platform mobile application development.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Education & Journey"
          subtitle="My learning path and development experience so far"
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-slate-700 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex gap-5 sm:gap-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-900 border border-sky-500/40 flex items-center justify-center text-sky-400 z-10">
                    <Icon size={20} />
                  </div>
                  <div className="card flex-1 p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
