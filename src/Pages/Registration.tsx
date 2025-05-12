import { useState, ChangeEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function isValidIranianNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;
  const check = +input[9];
  const sum = [...input]
    .slice(0, 9)
    .reduce((acc, digit, i) => acc + +digit * (10 - i), 0);
  const remainder = sum % 11;
  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
}

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationCode: "",
    mobile: "",
    email: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidIranianNationalCode(formData.nationCode)) {
      setError("کد ملی نامعتبر است.");
      return;
    }

    const registerUser = async () => {
      const { firstName, lastName, nationCode, mobile, email } = formData;
      const payload = { firstName, lastName, nationCode, mobile, email };
      const res = await axios.post("/api/Account/Register", payload);
      return res.data;
    };

    const loginUser = async (mobile: string, nationCode: string) => {
      const res = await axios.post("/api/Account/token", {
        username: mobile,
        password: nationCode,
      });
      return res.data;
    };
    navigate("/panel");

    // try {
    //   await registerUser();
    //   const tokenResponse = await loginUser(
    //     formData.mobile,
    //     formData.nationCode
    //   );
    //   localStorage.setItem("token", tokenResponse.token);
    //   navigate("/panel");
    // } catch (error: any) {
    //   console.error("خطا در ثبت‌نام یا ورود:", error);
    //   if (error.response?.data?.errors) {
    //     console.log("پاسخ سرور:", error.response.data);
    //     setError("خطای اعتبارسنجی: لطفاً فیلدها را بررسی کنید.");
    //   } else {
    //     setError("خطایی در ثبت‌نام یا ورود رخ داد.");
    //   }
    // }
  };

  return (
    <div
      className="relative w-full bg-cover bg-center min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:".../rigester.jpg",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 grid md:grid-cols-2 w-full max-w-6xl gap-8 items-center">
        <div className="text-white space-y-4 px-4 text-right">
          <h2 className="text-3xl font-bold">بیش از 1000 دانش‌پذیر حقوقی</h2>
          <p className="text-lg leading-relaxed">
            گروه آموزشی برهان با بیشترین درصد قبولی در آزمون‌های حقوقی و ارائه
            مشاوره‌های تخصصی...
          </p>
          <div className="flex gap-6 pt-6">
            <div className="text-center">
              <div className="border-4 border-cyan-400 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">
                6+
              </div>
              <p className="mt-2">اساتید</p>
            </div>
            <div className="text-center">
              <div className="border-4 border-cyan-400 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">
                1000+
              </div>
              <p className="mt-2">دانش‌پذیر</p>
            </div>
            <div className="text-center">
              <div className="border-4 border-cyan-400 rounded-full w-20 h-20 flex items-center justify-center text-xl font-bold">
                90%+
              </div>
              <p className="mt-2">قبولی</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            فرم ثبت‌نام
          </h2>

          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="نام"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="نام خانوادگی"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="شماره موبایل"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="nationCode"
            value={formData.nationCode}
            onChange={handleChange}
            placeholder="کد ملی"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ایمیل (اختیاری)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            ثبت‌نام
          </button>

          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}
        </form>
      </div>
    </div>
  );
}
