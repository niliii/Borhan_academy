import React from "react";
import useDarkMode from "./useDarkMode";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
    </button>
  );
};

export default DarkModeToggle;
