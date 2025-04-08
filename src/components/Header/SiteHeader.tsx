import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "components/ThemeToggle";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoUrl = "/images/logo/logo.svg"; 

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        scrolled
          ? "bg-gray-400/90 text-black shadow-lg"
          : "bg-white/70 dark:bg-gray-800/80 text-black dark:text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <ThemeToggle />
        </div>

        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-8 text-gray-800 dark:text-white">
            <li>
              <Link to="/" className="hover:text-gray-500 transition">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link to="/cours" className="hover:text-gray-500 transition">
                همه‌ی دوره‌ها
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-500 transition">
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-500 transition">
                تماس با ما
              </Link>
            </li>
            <li>
              <Link to="/signinform" className="hover:text-gray-500 transition">
                ثبت‌ نام
              </Link>
            </li>
            <li>
              <Link to="/users" className="hover:text-gray-500 transition">
                داشبورد
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center">
          <img src={logoUrl} alt="Logo" className="h-10" />
        </div>
      </div>
    </header>
  );
}
