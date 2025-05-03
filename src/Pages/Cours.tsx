import React, { useEffect } from "react";
import { AccountAPI } from "API/api";
import UserLessons from "./UserLessons";
import { useUserStore } from "../store/useUserStore";

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
  const {
    user,
    token,
    userLessons,
    setUserLessons,
    addUserLesson,
    removeUserLesson,
  } = useUserStore();

  useEffect(() => {
    const fetchLessons = async () => {
      if (user && user.id && token) {
        try {
          const response = await AccountAPI.getUserLessons(Number(user.id));
          setUserLessons(response.data);
        } catch (err) {
          console.error("خطا در دریافت کلاس‌های انتخاب‌شده:", err);
        }
      }
    };

    fetchLessons();
  }, [user, token, setUserLessons]);

  const isClassSelected = (classId: number) => {
    return userLessons.some((lesson) => lesson.lessonId === classId);
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">مدیریت کلاس‌ها</h1>
        {user?.id ? <UserLessons userId={user.id} /> : <p>ابتدا وارد شوید.</p>}
      </div>

      <div className="w-full py-12 bg-white pt-32">
        <h2 className="text-2xl font-bold text-center mb-6">
          قابل توجه دانش‌پذیران گروه آموزشی برهان
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* نرم‌افزارها */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-center text-lg font-semibold mb-4">
              لطفا برای ورود در کلاس‌های آنلاین ابتدا نرم‌افزار ادوبی کانکت را نصب کنید
            </p>
            <div className="space-y-4">
              {downloads.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
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

          {/* کلاس‌ها */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-center mb-4">
              لیست کلاس‌ها
            </h3>
            <div className="space-y-4">
              {classes.map((cls) => {
                const selected = isClassSelected(cls.id);
                return (
                  <div
                    key={cls.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="text-gray-700">{cls.title}</span>
                    {selected ? (
                      <button
                        onClick={() => removeUserLesson(cls.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                      >
                        حذف کلاس
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          addUserLesson({
                            lessonId: cls.id,
                            lessonName: cls.title,
                          })
                        }
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                      >
                        افزودن کلاس
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cours;
