"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
        <div className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full w-11 h-11"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <FaSun className="absolute !h-6 !w-6 rotate-0 scale-100 dark:rotate-90 dark:scale-0"></FaSun>
      <FaMoon className="absolute !h-6 !w-6 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
