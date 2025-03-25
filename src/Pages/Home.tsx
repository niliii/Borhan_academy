// 'use client';
import { useState } from "react";
//import { motion } from "framer-motion";
//import Image from "next/image";
import "tailwindcss/tailwind.css";
import img11 from "../assets/Images/img11.jpg"; 
import img12 from "../assets/Images/img12.jpg"; 
import img22 from "../assets/Images/img22.jpg"; 
//import React from "react";
type FooterProps = {
  title: string;
  img11: string;
};
const Carousel = () => {
  const slides = [
    {
      src: "/assets/Images/img11.jpg",
      title: "با کسب بیشترین قبولی در سال های اخیر",
      description: "در آزمون های وکالت ، قضاوت و سردفتری",
    },
    {
      src: "/assets/Images/img22.png",
      title: "با کسب بیشترین قبولی در سال های اخیر",
      description: "در آزمون های وکالت ، قضاوت و سردفتری",
    },
    {
      src: "/assets/Images/img12.jpg",
      title: "با کسب بیشترین قبولی در سال های اخیر",
      description: "در آزمون های وکالت ، قضاوت و سردفتری",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-1/2 flex items-center justify-center bg-gray-900">
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg">
        <div className="relative flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center p-4">
                <h3 className="text-3xl font-bold">{slide.title}</h3>
                <p className="mt-2 text-lg">{slide.description}</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                  امروز شروع کنید
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

const Section = () => {
  return (
    <div className="container mx-auto my-12 text-center">
      <h2 className="text-3xl font-bold">ارائه متفاوت ترین راهکارهای آموزشی</h2>
      <p className="mt-4 text-lg">
        گروه آموزشی برهان موسسه تمام هوشمند شهر مشهد با کادری مجرب و حرفه‌ای
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            src: "/Images/consiler.jpg",
            title: "برترین اساتید",
            subtitle: "آزمون وکالت",
          },
          {
            src: "/Images/consiler1.jpg",
            title: "برگزاری دوره ها",
            subtitle: "به صورت حضوری و آنلاین",
          },
          {
            src: "/Images/consiler2.jpg",
            title: "مجله برهان",
            subtitle: "جلسه هفتگی تبادل نظر",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              className="text-white py-10 px-6 shadow-md relative bg-cover bg-center"
              src="./assets/Images/img11.jpg"
              alt="description"
            />
            <p className="mt-4 text-lg font-bold">{item.title}</p>
            <span className="text-blue-500">{item.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const OnlineClasses = () => {
    const classes = [
      {
        id: 1,
        image: "/assets/images/class1.png", // مسیر عکس را تغییر دهید
        title: "آموزش ورود به کلاس آنلاین",
        description: "برای ورود به کلاس‌های آنلاین لطفا روی دکمه زیر کلیک کنید.",
        buttonText: "آموزش ورود به کلاس آنلاین",
      },
      {
        id: 2,
        image: "/assets/images/class2.png", // مسیر عکس را تغییر دهید
        title: "ورود به کلاس آنلاین",
        description: "برای ورود به کلاس‌های آنلاین لطفا روی دکمه زیر کلیک کنید.",
        buttonText: "ورود به کلاس آنلاین",
      },
    ];
  
    return (
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {classes.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain rounded-t-2xl"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default function Home() {
  return (
    <>
      <Carousel />
      <Section />
    </>
  );
}
