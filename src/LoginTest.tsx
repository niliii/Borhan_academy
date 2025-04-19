import axios from "axios";
import React from "react";

const LoginTest: React.FC = () => {
  const loginUser = async () => {
    try {
      const response = await axios.post("https://demo-api.darkube.app/api/Account/token", {
        email: "test123@demo.com",
        password: "Test@12345"
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("✅ Login success:", response.data);
    } catch (error: any) {
      console.error("❌ Login error:", error);
      console.log("🔍 Response:", error?.response?.data);
    }
  };

  return (
    <div className="p-10">
      <button
        onClick={loginUser}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        تست لاگین
      </button>
    </div>
  );
};

export default LoginTest;
