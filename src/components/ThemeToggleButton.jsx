import { Moon, Sun } from "lucide-react";

export default function ThemeToggleButton({
  theme,
  onClick,
  className = "",
}) {
  const isDark = theme === "dark";
  const Icon = isDark ? Sun : Moon;
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      className={`inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full border border-slate-700 text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors ${className}`}
    >
      <Icon size={16} aria-hidden="true" />
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
