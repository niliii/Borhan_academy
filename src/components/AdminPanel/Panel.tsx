// import { useState } from "react";

// const AdminPanel = () => {
//   const [menu, setMenu] = useState("dashboard");

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-white shadow-lg p-5">
//         <h2 className="text-2xl font-bold text-blue-600 mb-6">پنل ادمین</h2>
//         <ul className="space-y-4">
//           <li>
//             <button
//               className={`w-full text-left ${
//                 menu === "dashboard" ? "text-blue-600 font-bold" : ""
//               }`}
//               onClick={() => setMenu("dashboard")}
//             >
//               داشبورد
//             </button>
//           </li>
//           <li>
//             <button
//               className={`w-full text-left ${
//                 menu === " s" ? "text-blue-600 font-bold" : ""
//               }`}
//               onClick={() => setMenu(" s")}
//             >
//               مشاوران
//             </button>
//           </li>
//           <li>
//             <button
//               className={`w-full text-left ${
//                 menu === "students" ? "text-blue-600 font-bold" : ""
//               }`}
//               onClick={() => setMenu("students")}
//             >
//               دانش‌آموزان
//             </button>
//           </li>
//           <li>
//             <button
//               className={`w-full text-left ${
//                 menu === "settings" ? "text-blue-600 font-bold" : ""
//               }`}
//               onClick={() => setMenu("settings")}
//             >
//               تنظیمات
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {menu === "dashboard" && (
//           <h2 className="text-2xl font-bold">داشبورد</h2>
//         )}
//         {menu === " s" && (
//           <h2 className="text-2xl font-bold">مدیریت مشاوران</h2>
//         )}
//         {menu === "students" && (
//           <h2 className="text-2xl font-bold">مدیریت دانش‌آموزان</h2>
//         )}
//         {menu === "settings" && <h2 className="text-2xl font-bold">تنظیمات</h2>}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;



import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../components/ecommerce/RecentOrders";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import PageMeta from "../../components/common/PageMeta";

export default function DashbordHome() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | Borhan Akademi - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for Borhan Akademi - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
