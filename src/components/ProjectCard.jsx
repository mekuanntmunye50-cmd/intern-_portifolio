import { useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import TechnologyIcon from "./TechnologyIcon";

export default function ProjectCard({ project }) {
  const [imageUnavailable, setImageUnavailable] = useState(!project.image);

  return (
    <article className="card group overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-sky-500/10">
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-navy-900 overflow-hidden">
        {imageUnavailable ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Code2 size={48} className="text-slate-600 group-hover:text-sky-500/50 group-hover:scale-110 transition-all duration-300" />
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} project design preview`}
            loading="lazy"
            onError={() => setImageUnavailable(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-white group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="group/tech inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300 border border-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/50 hover:bg-slate-700/80"
            >
              <TechnologyIcon name={tech} size={14} />
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="mt-4 space-y-1">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="text-xs text-slate-500 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-sky-400" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg border border-slate-700 text-slate-300 hover:border-sky-500 hover:text-sky-300 transition-colors"
            >
              <Github size={16} />
              Code
            </a>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg border border-slate-800 text-slate-600 cursor-not-allowed">
              <Github size={16} />
              Code
            </span>
          )}
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg bg-sky-500/10 text-sky-300 border border-sky-500/30 hover:bg-sky-500/20 transition-colors"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          ) : (
            <span className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg border border-slate-800 text-slate-600 cursor-not-allowed">
              <ExternalLink size={16} />
              Demo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
