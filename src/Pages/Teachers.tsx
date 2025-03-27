import React from "react";

const instructors = [
  { id: 1, img: "/assets/Images/BestAvatar/1.jpg" },
  { id: 2, img: "/assets/Images/BestAvatar/10.jpg" },
  { id: 3, img: "/assets/Images/BestAvatar/3.jpg" },
  { id: 4, img: "/assets/Images/BestAvatar/12.jpg" },
  { id: 5, img: "/assets/Images/BestAvatar/5.jpg" },
  { id: 6, img: "/assets/Images/BestAvatar/6.jpg" },
];

const stats = [
  { id: 1, icon: "📝", number: "735", label: "آزمون" },
  { id: 2, icon: "👤", number: "903", label: "دانشپذیر حقوقی" },
  { id: 3, icon: "📖", number: "200", label: "موضوعات تدریس شده" },
  { id: 4, icon: "❤️", number: "97", label: "میزان رضایت" },
];

const InstructorsSection = () => {
  return (
    <div className="w-full bg-white py-12 ">
      {/* تیتر بخش */}
      <h2 className="text-2xl font-bold text-center mb-6 inline-block mx-auto grid justify-items-center ">
        اساتید دوره های وکالت
      </h2>

      {/* اسلایدر اساتید */}
      <div className="w-full overflow-x-auto flex space-x-4 px-6 pb-4 no-scrollbar justify-center">
        {instructors.map((instructor) => (
          <img
            key={instructor.id}
            src={instructor.img}
            alt="استاد"
            className="w-40 h-52 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>

      {/* بخش آمارها */}
      <div className="bg-blue-500 text-white py-6 mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="text-4xl">{stat.icon}</div>
            <p className="text-2xl font-bold">{stat.number}</p>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;
