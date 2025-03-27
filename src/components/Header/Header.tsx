import React from "react";

type HeaderProps = {
  title: string;
  logoUrl: string;
};

const Header: React.FC<HeaderProps> = ({ title, logoUrl }) => {
  return (
    <header className="bg-gray-400 position-fix text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center ">
        <nav>
          <ul className="flex space-x-10 rtl:space-x-reverse flex-row-reverse ">
            <li>
              <a href="Home" className="hover:underline">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
              همه ی دوره ها
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                تماس با ما
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

export default Header;