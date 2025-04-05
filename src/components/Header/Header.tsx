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
    className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
      scrolled
        ? "bg-gray-400/90 text-black shadow-lg" // رنگ تیره‌تر برای اسکرول‌شده
        : "bg-white/70 dark:bg-gray-400/80 text-black-900 dark:text-gray-200"
    }`}
  >
    <div className="container mx-auto flex justify-between items-center p-4">
      
      <div className="flex items-center">
        <ThemeToggle />
      </div>
  
      <nav className="flex-1 flex justify-center">
  <ul className="flex space-x-8 text-gray-800 dark:text-white">
    <li>
      <a href="/Home" className="hover:text-gray-500 transition">صفحه اصلی</a>
    </li>
    <li>
      <a href="/Cours" className="hover:text-gray-500 transition">همه‌ی دوره‌ها</a>
    </li>
    <li>
      <a href="/About" className="hover:text-gray-500 transition">درباره ما</a>
    </li>
    <li>
      <a href="/Contact" className="hover:text-gray-500 transition">تماس با ما</a>
    </li>
    <li>
      <a href="/SignInForm" className="hover:text-gray-500 transition">
        <i className="fas fa-user-plus"></i> ثبت نام
      </a>
    </li>
    <li>
      <a href="/Users" className="hover:text-gray-500 transition">
        <i className="fas fa-user-plus"></i> داشبورد
      </a>
    </li>
  </ul>
</nav>
  
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
