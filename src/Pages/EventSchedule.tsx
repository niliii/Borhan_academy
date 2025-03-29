import React from "react";

const events = [
  { day: "جمعه 1 بهمن", code1: "", code2: "", consultation: "", program: "کارگاه قوانین خاص", description: "" },
  { day: "شنبه 2 بهمن", code1: "", code2: "", consultation: "", program: "", description: "" },
  { day: "یک‌شنبه 3 بهمن", code1: "", code2: "", consultation: "15 تا 17 با استاد فیضی", program: "تدریس قانون اساسی دکتر محمدی", description: "" },
  { day: "سه‌شنبه 5 بهمن", code1: "", code2: "", consultation: "15 تا 17 با استاد شاه حسینی", program: "تدریس: جزا دکتر محمدی، تدریس: آدم استادشاه حسینی ویژه وکالت 1400", description: "" },
  { day: "چهارشنبه 6 بهمن", code1: "", code2: "", consultation: "15 تا 20 آقای خلیلی رتبه 4 کانون خراسان", program: "تدریس: تجارت استاد فیضی، تدریس: اکات استاد جوان ویژه وکالت 1400", description: "" },
  { day: "پنج‌شنبه 7 بهمن", code1: "", code2: "", consultation: "9 تا 15 خانم فرخی رتبه 2 کانون خراسان", program: "تدریس: اصول فقه استاد خلیلی ویژه وکالت 1400", description: "جلسه تبادل نظر مجله برهان ساعت: 10 تا 13" },
  { day: "پنج‌شنبه 7 بهمن", code1: "", code2: "", consultation: "15 تا 20 استاد بیجندی رتبه 5 کانون خراسان", program: "تدریس: حقوق مدنی استاد فیضی ویژه وکالت 1400", description: "" },
];

const EventSchedule = () => {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">رویدادهای بهمن ماه</h2>
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-xl shadow-md text-right">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border border-gray-300">روز</th>
              <th className="p-3 border border-gray-300">کلاس‌های کد ۱</th>
              <th className="p-3 border border-gray-300">کلاس‌های کد ۲</th>
              <th className="p-3 border border-gray-300">مشاوره درسی</th>
              <th className="p-3 border border-gray-300">برنامه‌های برهان</th>
              <th className="p-3 border border-gray-300">توضیحات</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100 border border-gray-300"}>
                <td className="p-3 border border-gray-300">{event.day}</td>
                <td className="p-3 border border-gray-300">{event.code1}</td>
                <td className="p-3 border border-gray-300">{event.code2}</td>
                <td className="p-3 border border-gray-300">{event.consultation}</td>
                <td className="p-3 border border-gray-300">{event.program}</td>
                <td className="p-3 border border-gray-300">{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventSchedule;
