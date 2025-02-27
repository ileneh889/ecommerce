"use client";

// UI Components
import { Button } from "../ui/button";

// Icons
import { MoonIcon, SunIcon } from "lucide-react";

// Theme Provider
import { useTheme } from "next-themes";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-10 h-10 rounded-full"
      onClick={toggleTheme}
    >
      <SunIcon className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className=" sr-only">Toggle theme</span>
    </Button>
  );
}