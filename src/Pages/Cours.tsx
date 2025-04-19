import React from "react";
import axios from 'axios';

axios.get('https://demo-api.darkube.app/api/Course')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

const downloads = [
  { id: 1, label: "نرم افزار adobe connect برای ویندوز", link: "#" },
  { id: 2, label: "برای سیستم عامل اندروید", link: "#" },
  { id: 3, label: "برای سیستم عامل IOS", link: "#" },
];

const classes = [
  { id: 1, title: "حقوق جزا", link: "#" },
  { id: 2, title: "آیین دادرسی مدنی", link: "#" },
  { id: 3, title: "حقوق تجارت", link: "#" },
  { id: 4, title: "آیین دادرسی کیفری", link: "#" },
  { id: 5, title: "اصول فقه", link: "#" },
  { id: 6, title: "حقوق مدنی", link: "#" },
];

const Cours = () => {
  return (
    <div className="w-full py-12 bg-white pt-32">
      {/* تیتر بخش */}
      <h2 className="text-2xl font-bold text-center mb-6">
        قابل توجه دانش پذیران گروه آموزشی برهان
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* بخش دانلود نرم‌افزار */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <p className="text-center text-lg font-semibold mb-4">
            لطفا برای ورود در کلاس های آنلاین ابتدا نرم افزار ادوبی کانکت را نصب کنید
          </p>
          <div className="space-y-4">
            {downloads.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">{item.label}</span>
                <a
                  href={item.link}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  دانلود
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* بخش لینک کلاس‌ها */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-center mb-4">لینک کلاس ها</h3>
          <div className="space-y-4">
            {classes.map((cls) => (
              <div key={cls.id} className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-700">{cls.title}</span>
                <a
                  href={cls.link}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  ورود به کلاس
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
