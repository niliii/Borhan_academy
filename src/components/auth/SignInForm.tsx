import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "components/icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import Button from "../ui/button/Button";
import { useUserStore } from "store/useUserStore";
import { AccountAPI } from "../../API/api";
import { useAuthStore } from "store/auth";
import axios from "axios";

export default function SignInForm() {
 
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();
  
    const [username, setUsername] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
      fullName: "",
      mobile: "",
      nationalCode: "",
    });
  
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
    });
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [darkMode]);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleLogin = async () => {
      try {
        const response = await axios.post(
          "https://demo-api.darkube.app/api/Account/token",
           { nationCode: formData.nationalCode }
        );
  
        const token = response.data.token;
        useAuthStore.getState().setToken(token);
  
        navigate("/panel");
      } catch (err: any) {
        console.error("Login error:", err);
        setError("ورود ناموفق بود. لطفاً دوباره تلاش کنید.");
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-5 right-5 px-3 py-1 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? "☀️ روشن" : "🌙 تاریک"}
        </button>

        <div className="w-full max-w-md rounded-2xl backdrop-blur-md bg-gray-200/30 dark:bg-gray-700/30 shadow-xl p-6 sm:p-10">
          <Link
            to="/"
            className="inline-flex items-center mb-6 text-sm text-gray-600 transition-colors hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            برگشت به صفحه قبل
          </Link>

          <div className="mb-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
              ورود به حساب
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              ایمیل و رمز عبور خود را وارد کنید
            </p>
          </div>

          <div className="relative py-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 text-gray-500 bg-white dark:bg-gray-900"></span>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="mt-6 space-y-6"
          >
            <div>
              <Label>
                نام کاربری <span className="text-red-500">*</span>
              </Label>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                placeholder="نام و نام خانوادگی"
              />
            </div>

            <div>
              <Label>
                کد ملی <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <input
                  type="text"
                  name="nationalCode"
                  value={formData.nationalCode}
                  onChange={handleChange}
                  placeholder="کد ملی"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <EyeCloseIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Checkbox checked={isChecked} onChange={setIsChecked} />
                مرا به خاطر بسپار
              </label>
              <Link
                to="/reset-password"
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                رمز را فراموش کرده‌اید؟
              </Link>
            </div>

            <Button className="w-full mt-3" size="sm" onClick={handleLogin}>
              ورود
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            حساب کاربری ندارید؟{" "}
            <Link
              to="/signup"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
            >
              ثبت‌نام
            </Link>
          </div>
        </div>
      </div>
    );
  };

