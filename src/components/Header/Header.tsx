import React, { useState, useEffect } from "react";

type HeaderProps = {
  title: string;
  logoUrl: string;
};

const Header: React.FC<HeaderProps> = ({ title, logoUrl }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-lg transition-all duration-300 ${
        scrolled ? "bg-gray-800/80 shadow-lg" : "bg-white/30 dark:bg-gray-900/30"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* دکمه دارک مود سمت چپ */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>

        {/* منو وسط با فاصله از لوگو */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-8 rtl:space-x-reverse text-gray-800 dark:text-white">
            <li>
              <a href="Home" className="hover:text-gray-500 transition">صفحه اصلی</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500 transition">همه‌ی دوره‌ها</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500 transition">درباره ما</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500 transition">تماس با ما</a>
            </li>
          </ul>
        </nav>

        {/* لوگو سمت راست */}
        <div className="flex items-center">
          <img src={logoUrl} alt="Logo" className="h-10" />
        </div>
      </div>
    </header>
  );
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default Header;
