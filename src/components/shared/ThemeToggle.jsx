"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = resolvedTheme ?? "dark";

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="btn btn-circle btn-outline"
      aria-label="Toggle Theme"
    >
      {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}