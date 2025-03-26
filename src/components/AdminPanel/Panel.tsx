import { useState } from "react";

const AdminPanel = () => {
  const [menu, setMenu] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">پنل ادمین</h2>
        <ul className="space-y-4">
          <li>
            <button className={`w-full text-left ${menu === "dashboard" ? "text-blue-600 font-bold" : ""}`} onClick={() => setMenu("dashboard")}>
              داشبورد
            </button>
          </li>
          <li>
            <button className={`w-full text-left ${menu === "advisors" ? "text-blue-600 font-bold" : ""}`} onClick={() => setMenu("advisors")}>
              مشاوران
            </button>
          </li>
          <li>
            <button className={`w-full text-left ${menu === "students" ? "text-blue-600 font-bold" : ""}`} onClick={() => setMenu("students")}>
              دانش‌آموزان
            </button>
          </li>
          <li>
            <button className={`w-full text-left ${menu === "settings" ? "text-blue-600 font-bold" : ""}`} onClick={() => setMenu("settings")}>
              تنظیمات
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {menu === "dashboard" && <h2 className="text-2xl font-bold">داشبورد</h2>}
        {menu === "advisors" && <h2 className="text-2xl font-bold">مدیریت مشاوران</h2>}
        {menu === "students" && <h2 className="text-2xl font-bold">مدیریت دانش‌آموزان</h2>}
        {menu === "settings" && <h2 className="text-2xl font-bold">تنظیمات</h2>}
      </div>
    </div>
  );
};

export default AdminPanel;
