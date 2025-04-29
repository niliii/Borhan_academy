import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import { AccountAPI } from "../services/api"; // مسیر رو بسته به ساختار پروژه‌ات تنظیم کن

const UsersPage = () => {
  const users = useUserStore((state) => state.users);
  const setUsers = useUserStore((state) => state.setUsers);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await AccountAPI.getAllUsers();
        setUsers(response.data); // لیست کاربران رو در Zustand ذخیره کن
      } catch (error) {
        console.error("خطا در دریافت کاربران:", error);
      }
    };

    fetchUsers();
  }, [setUsers]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">لیست کاربران</h2>
      {users.length === 0 ? (
        <p>هیچ کاربری یافت نشد.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800 dark:text-white"
            >
              <p><strong>نام:</strong> {user.name}</p>
              <p><strong>ایمیل:</strong> {user.email}</p>
              <p><strong>توکن:</strong> {user.token}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersPage;
