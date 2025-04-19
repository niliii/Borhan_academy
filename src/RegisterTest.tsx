import React from "react";
import axios from "axios";

const RegisterTest: React.FC = () => {
    const registerUser = async () => {
        try {
          const response = await axios.post("https://demo-api.darkube.app/api/Account/Register", {
            email: "test" + Date.now() + "@demo.com", // ایمیل تصادفی برای تست
            password: "Test@12345", // پسورد قوی
            confirmPassword: "Test@12345"
          }, {
            headers: {
              "Content-Type": "application/json"
            }
          });
      
          console.log("✅ Register success:", response.data);
        } catch (error: any) {
          console.error("❌ Register error:", error);
          // برای دیدن دقیق خطای سرور
          console.log("🔍 Response:", error?.response?.data);
        }
      };
      

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">ثبت‌نام تستی</h1>
      <button
        onClick={registerUser}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        تست ثبت‌نام
      </button>
    </div>
  );
};

export default RegisterTest;
