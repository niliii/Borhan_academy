import React, { useEffect, useState } from "react";
import { AccountAPI } from "API/api";
import UserLessons from "./UserLessons";
import { useUserStore } from "../store/useUserStore";


type Lesson = {
  id: number;
  title: string;
  description?: string;
};

const downloads = [
  { id: 1, label: "نرم افزار adobe connect برای ویندوز", link: "#" },
  { id: 2, label: "برای سیستم عامل اندروید", link: "#" },
  { id: 3, label: "برای سیستم عامل IOS", link: "#" },
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

  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const fetchAllLessons = async () => {
    try {
      const response = await AccountAPI.getAllLessons();
      console.log("همه کلاس‌ها:", response.data);
      setAllLessons(response.data);
    } catch (err) {
      console.error("خطا در دریافت لیست دروس:", err);
    }
  };

  const fetchUserLessons = async () => {
    if (user?.id && token) {
      try {
        const response = await AccountAPI.getUserLessons(user.id);
        setUserLessons(response.data);
      } catch (err) {
        console.error("خطا در دریافت کلاس‌های انتخاب‌شده:", err);
      }
    }
  };

  // useEffect(() => {
  //   fetchAllLessons();
  //   fetchUserLessons();
  // }, [user, token]);

  useEffect(() => {
    // اینو فقط برای تست دستی اضافه کن
    setAllLessons([
      { id: 1, title: "حقوق جزا" },
      { id: 2, title: "حقوق مدنی" },
      { id: 3, title: "آیین دادرسی کیفری" },
    ]);
  }, []); 

  const isClassSelected = (classId: number) =>
    userLessons.some((lesson) => lesson.lessonId === classId);

  const handleAddLesson = async (lesson: Lesson) => {
    if (!user || !user.id) return; 
    try {
      await AccountAPI.addUserLesson({
        userId: user!.id,
        lessonId: lesson.id,
      });
      addUserLesson({ lessonId: lesson.id, lessonName: lesson.title });
    } catch (err) {
      console.error("خطا در افزودن کلاس:", err);
    }
  };

  const handleRemoveLesson = async (lessonId: number) => {
    try {
      await AccountAPI.removeUserLesson(user!.id, lessonId);
      removeUserLesson(lessonId);
    } catch (err) {
      console.error("خطا در حذف کلاس:", err);
    }
  };

  return (
    <>
      {/* <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">مدیریت کلاس‌ها</h1>
        {user?.id ? <UserLessons userId={user.id} /> : <p>ابتدا وارد شوید.</p>}
      </div> */}

      <div className="w-full py-12 bg-white pt-32">
        <h2 className="text-2xl font-bold text-center mb-6">
          قابل توجه دانش‌پذیران گروه آموزشی برهان
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <p className="text-center text-lg font-semibold mb-4">
              لطفا برای ورود در کلاس‌های آنلاین ابتدا نرم‌افزار ادوبی کانکت را
              نصب کنید
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

          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-center mb-4">
              لیست کلاس‌ها
            </h3>
            
            <div className="space-y-4">
              {allLessons.length === 0 ? (
                <p className="text-center text-gray-500">درسی یافت نشد.</p>
              ) : (
                allLessons.map((cls) => {
                  const selected = isClassSelected(cls.id);
                  return (
                    <div
                      key={cls.id}
                      className="flex justify-between items-center border-b pb-2"
                    >
                      <span className="text-gray-700">{cls.title}</span>
                      {selected ? (
                        <button
                          onClick={() => handleRemoveLesson(cls.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                        >
                          حذف کلاس
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAddLesson(cls)}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                        >
                          افزودن کلاس
                        </button>
                      )}
                    </div>
                  );
                })
              )}
            </div>
            <UserLessons userId={1}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cours;
