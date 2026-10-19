import {
  SiCplusplus,
  SiCss,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiOpenjdk,
  SiTailwindcss,
  SiThemoviedatabase,
} from "react-icons/si";
import { Code2, Globe2, ShieldCheck, Smartphone } from "lucide-react";

const technologyIcons = {
  "c++": [SiCplusplus, "#00599C"],
  "css": [SiCss, "#1572B6"],
  "css3": [SiCss, "#1572B6"],
  "expo": [SiExpo, "#FFFFFF"],
  "express": [SiExpress, "#FFFFFF"],
  "express.js": [SiExpress, "#FFFFFF"],
  "firebase": [SiFirebase, "#FFCA28"],
  "firebase auth": [SiFirebase, "#FFCA28"],
  "git": [SiGit, "#F05032"],
  "git & github": [SiGithub, "#FFFFFF"],
  "github": [SiGithub, "#FFFFFF"],
  "html": [SiHtml5, "#E34F26"],
  "html5": [SiHtml5, "#E34F26"],
  "javascript": [SiJavascript, "#F7DF1E"],
  "java": [SiOpenjdk, "#ED8B00"],
  "jwt": [SiJsonwebtokens, "#FFFFFF"],
  "mongodb": [SiMongodb, "#47A248"],
  "mysql": [SiMysql, "#4479A1"],
  "node.js": [SiNodedotjs, "#5FA04E"],
  "php": [SiPhp, "#777BB4"],
  "postman": [SiPostman, "#FF6C37"],
  "react": [SiReact, "#61DAFB"],
  "react.js": [SiReact, "#61DAFB"],
  "react native": [SiReact, "#61DAFB"],
  "responsive design": [Smartphone, "#A5B4FC"],
  "rest apis": [Globe2, "#60A5FA"],
  "tailwind css": [SiTailwindcss, "#06B6D4"],
  "tmdb api": [SiThemoviedatabase, "#01D277"],
  "vs code": [Code2, "#007ACC"],
  "visual studio code": [Code2, "#007ACC"],
  "context api": [SiReact, "#61DAFB"],
  "authentication": [ShieldCheck, "#A78BFA"],
};

export default function TechnologyIcon({ name, className = "" }) {
  const [Icon, color] = technologyIcons[name.toLowerCase()] || [Code2, "#94A3B8"];
  const neutralIconClass = color === "#FFFFFF" ? "technology-icon-neutral" : "";

  return (
    <Icon
      className={`technology-icon ${neutralIconClass} shrink-0 transition-all duration-200 group-hover/skill:scale-110 group-hover/skill:drop-shadow-[0_0_6px_currentColor] group-hover/tech:scale-110 group-hover/tech:drop-shadow-[0_0_6px_currentColor] ${className}`}
      style={{ color }}
      aria-hidden="true"
    />
  );
}
