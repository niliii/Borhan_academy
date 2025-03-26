// 'use client';

import { useState, useEffect, useRef } from "react";

import "tailwindcss/tailwind.css";
import img11 from "../assets/Images/img11.jpg";
import img12 from "../assets/Images/img12.jpg";
import img22 from "../assets/Images/img22.jpg";
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
        <div
          className="relative flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
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
      image: "./assets/images/onlineClass2.png",
      title: "آموزش ورود به کلاس آنلاین",
      description: "برای ورود به کلاس‌های آنلاین لطفا روی دکمه زیر کلیک کنید.",
      buttonText: "آموزش ورود به کلاس آنلاین",
    },
    {
      id: 2,
      image: "./assets/images/login1.png",
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
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
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
const RegistrationSection = () => {
  return (
    <section className="relative w-full py-16 bg-gray-900 text-white">
      {/* تصویر پس‌زمینه */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('./assets/images/rigister.jpg')" }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* بخش توضیحات و آمار */}
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            بیش از 1000 دانش‌پذیر حقوقی
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            گروه آموزشی برهان با بیشترین درصد قبولی در سال‌های اخیر در آزمون‌های
            حقوقی، وکالت و قضاوت توانسته است دانش‌پذیران بسیاری را با سطح علمی
            بالا به جامعه ارائه دهد.
          </p>

          {/* بخش آمار */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-6">
            {[
              { number: "6+", label: "اساتید" },
              { number: "1000+", label: "دانش‌پذیر" },
              { number: "90%+", label: "قبولی" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center border-4 border-blue-500 rounded-full text-2xl font-bold">
                  {stat.number}
                </div>
                <p className="mt-2 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* فرم ثبت‌نام */}
        <div className="lg:w-1/3 bg-white text-gray-900 p-6 lg:p-8 rounded-2xl shadow-xl mt-10 lg:mt-0">
          <h3 className="text-xl font-semibold text-center text-blue-600">
            همین الان ثبت نام کنید
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            فرم زیر را پر کنید، ما در اسرع وقت با شما تماس خواهیم گرفت.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="شماره موبایل"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              placeholder="کد ملی"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all">
              ثبت نام
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
const CalendarSection = () => {
  const months = [
    { name: "مهر", color: "bg-orange-500" },
    { name: "آبان", color: "bg-blue-500" },
    { name: "آذر", color: "bg-blue-500" },
    { name: "دی", color: "bg-blue-500" },
    { name: "بهمن", color: "bg-blue-500" },
    { name: "اسفند", color: "bg-blue-500" },
  ];

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">تقویم آموزشی برهان</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {months.map((month, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl text-center transition-all hover:shadow-2xl"
            >
              <p className="text-lg text-gray-600 font-medium">۱ تا ۳۰</p>
              <h3 className="text-2xl font-bold text-blue-600 mt-2">
                {month.name}
              </h3>
              <button
                className={`${month.color} text-white px-6 py-2 mt-4 rounded-full shadow-md hover:scale-105 transition`}
              >
                مشاهده
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdvisorsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const advisors = [
    {
      name: "محسن شاه حسینی",
      day: "یک‌شنبه",
      time: "۱۲ تا ۱۶",
      img: "/advisor1.jpg",
    },
    {
      name: "هنگامه فرخی",
      day: "چهارشنبه",
      time: "۱۰ تا ۱۵",
      img: "/advisor2.jpg",
    },
    {
      name: "مهدی خلیلی",
      day: "سه‌شنبه",
      time: "۱۶ تا ۲۰",
      img: "/advisor3.jpg",
    },
    {
      name: "فاطمه بیرجندی",
      day: "پنج‌شنبه",
      time: "۱۵ تا ۲۰",
      img: "/advisor4.jpg",
    },
    { name: "رضا علوی", day: "دوشنبه", time: "۱۴ تا ۱۸", img: "/advisor5.jpg" },
    { name: "زهرا محمدی", day: "شنبه", time: "۱۳ تا ۱۷", img: "/advisor6.jpg" },
  ];

  return (
    <section className="py-16 bg-white text-gray-900 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          مشاوره درسی با رتبه‌های برتر آزمون وکالت ۹۹
        </h2>
        <p className="text-gray-600 mt-2">
          و مشاوره با استاد شاه حسینی، مشاور رتبه‌های تک‌رقمی
        </p>

        <div className="mt-10 relative flex items-center justify-center">
          {/* دکمه اسکرول چپ */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.5 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* لیست مشاوران با اسکرول افقی */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex gap-6 px-12 w-full max-w-4xl"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="w-64 p-6 bg-white shadow-lg rounded-2xl text-center transition-all hover:shadow-2xl flex-shrink-0"
              >
                <img
                  src={advisor.img}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-blue-600">
                  {advisor.name}
                </h3>
                <p className="text-gray-600 mt-1">{advisor.day}</p>
                <p className="text-gray-600">ساعت: {advisor.time}</p>
                <button className="bg-blue-500 text-white px-6 py-2 mt-4 rounded-full shadow-md hover:scale-105 transition">
                  ثبت مشاوره
                </button>
              </div>
            ))}
          </div>

          {/* دکمه اسکرول راست */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 z-10 bg-white shadow-md p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-600"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.5 19l7-7-7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
const data = [
  {
    name: "یاسمین ساغری",
    rank: "رتبه 27 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/1.jpg",
  },
  {
    name: "فاطمه بیرجندی",
    rank: "رتبه 5 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/10.jpg",
  },
  {
    name: "مهدی خلیلی",
    rank: "رتبه 4 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/9.jpg",
  },
  {
    name: "محسن شاه حسینی",
    rank: "رتبه 1 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/5.jpg",
  },
  {
    name: "محسن شاه حسینی",
    rank: "رتبه 1 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/3.jpg",
  },
  {
    name: "محسن شاه حسینی",
    rank: "رتبه 1 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/6.jpg",
  },
  {
    name: "محسن شاه حسینی",
    rank: "رتبه 1 کانون خراسان سال 99",
    img: "/assets/Images/BestAvatar/7.jpg",
  },
];

const HonorsSlider = () => {
  const [index, setIndex] = useState(0);
  const intervalTime = 4000;
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);

      // استفاده از setTimeout برای اطمینان از وجود sliderRef
      setTimeout(() => {
        if (sliderRef.current) {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          ({ left: 300, behavior: "smooth" });
        }
      }, 100); // 100 میلی‌ثانیه تأخیر
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">تالار افتخارات</h2>
      <div className="flex justify-center items-center">
        <div
          ref={sliderRef}
          className="w-full overflow-x-auto flex space-x-4 pb-4"
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex-none w-[300px] bg-white shadow-lg p-4 rounded-lg flex items-center space-x-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-orange-600">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === index ? "bg-orange-500 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
const HonorsSlider2 = () => {
  const [index, setIndex] = useState(0);
  const intervalTime = 4000;
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % data.length);

      if (sliderRef.current) {
        // sliderRef.current.scrollLeft += 300;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">تالار افتخارات</h2>
      <div className="flex justify-center items-center">
        <div
          ref={sliderRef}
          className="w-full overflow-x-auto flex space-x-4 pb-4"
        >
          {data.map((item, idx) => (
            <div
              key={idx}
              className="flex-none w-[300px] bg-white shadow-lg p-4 rounded-lg flex items-center space-x-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-orange-600">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === index ? "bg-orange-500 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const items = [
  { img: "/image1.jpg", link: "#" },
  { img: "/image2.jpg", link: "#" },
  { img: "/image3.jpg", link: "#" },
  { img: "/image4.jpg", link: "#" },
  { img: "/image4.jpg", link: "#" },

  { img: "/image4.jpg", link: "#" },

  { img: "/image4.jpg", link: "#" },

  { img: "/image4.jpg", link: "#" },

];;
// const HorizontalScroll = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);


  const HorizontalScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
  
    const scroll = (direction: "left" | "right") => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const scrollAmount = clientWidth * 0.8;
        scrollRef.current.scrollTo({
          left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    };
  return (
    <div className="relative w-full px-6 py-8 bg-gray-100 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">جدیدترین مطالب</h2>

      {/* دکمه‌های اسکرول */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-900 hover:scale-110"
        onClick={() => scroll("left")}
      >
        ◀
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-900 hover:scale-110"
        onClick={() => scroll("right")}
      >
        ▶
      </button>

      {/* اسکرول افقی */}
      <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="min-w-[300px] bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={item.img} alt="Card" className="w-full h-48 object-cover" />
            <div className="p-4 flex justify-center">
              <a
                href={item.link}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center transition-all duration-300 hover:bg-blue-600 hover:shadow-md"
              >
                مشاهده ادامه مطالب
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Carousel />
      <Section />
      <OnlineClasses />
      <RegistrationSection />
      <CalendarSection />
      <AdvisorsSection />
      <HonorsSlider />
      <HonorsSlider2 />
      <HorizontalScroll />
    </>
  );
}
