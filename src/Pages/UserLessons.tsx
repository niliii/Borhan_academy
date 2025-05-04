import { useEffect, useState } from "react";
import { AccountAPI } from "API/api";

interface UserLessonsProps {
  userId: number;
}

const UserLessons = ({ userId }: UserLessonsProps) => {
  const [userLessons, setUserLessons] = useState<any[]>([]);
  const [lessonId, setLessonId] = useState<number>(0);
  const [allLessons, setAllLessons] = useState<any[]>([]);

  const fetchUserLessons = async () => {
    try {
      const res = await AccountAPI.getUserLessons(userId);
      setUserLessons(res.data);
    } catch (error) {
      console.error("خطا در دریافت کلاس‌ها:", error);
    }
  };

  const handleAddLesson = async () => {
    if (!lessonId) return;
    try {
      await AccountAPI.addUserLesson({ userId, lessonId });
      fetchUserLessons();
    } catch (error) {
      console.error("خطا در افزودن کلاس:", error);
    }
  };

  const fetchAllLessons = async () => {
    try {
      const res = await AccountAPI.getAllLessons(); 
      setAllLessons(res.data);
    } catch (error) {
      console.error("خطا در دریافت لیست دروس:", error);
    }
  };

  useEffect(() => {
    fetchUserLessons();
    fetchAllLessons();
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">کلاس‌های انتخاب‌شده:</h2>
      <ul className="mb-4 list-disc ps-6">
        {userLessons.map((lesson) => (
          <li key={lesson.id}>{lesson.name}</li>
        ))}
      </ul>

      <div className="flex gap-2">
        <select
          className="border p-2 rounded"
          value={lessonId}
          onChange={(e) => setLessonId(Number(e.target.value))}
        >
          <option value={0}>انتخاب کلاس</option>
          {allLessons.map((lesson) => (
            <option key={lesson.id} value={lesson.id}>
              {lesson.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddLesson}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          افزودن
        </button>
      </div>
    </div>
  );
};

export default UserLessons;
