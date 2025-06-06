import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "components/icons";
import axios from "axios";
import { useAuthStore } from "store/auth";

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
export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationCode: "",
    mobile: "",
    email: "",
  });
  const [showNationCode, setShowNationCode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState("");
      const [success, setSuccess] = useState("");
      const [nationalCode, setnationalCode] = useState("");
      const navigate = useNavigate(); 


  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  //   console.log("Login success:");
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  // };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!isValidIranianNationalCode(formData.nationCode)) {
      setError("کد ملی نامعتبر است.");
      return;
    }
  
    // توجه: استفاده از PascalCase برای فیلدهای ارسال‌شده
    const registerUser = async () => {
      const { firstName, lastName, nationCode, mobile, email } = formData;
      const payload = {
        firstName,
        lastName,
        nationCode,
        mobile,
        email,
      };
      
      const res = await axios.post("https://demo-api.darkube.app/api/Account/Register", payload);
      return res.data;
    };
  
    const loginUser = async (mobile: string, nationCode: string) => {
      const res = await axios.post("https://demo-api.darkube.app/api/Account/token", {
        username: mobile,
        password: nationCode,
      });
      return res.data;
    };
  
    try {
      await registerUser();
      const tokenResponse = await loginUser(formData.mobile, formData.nationCode);
      localStorage.setItem("token", tokenResponse.token);
      navigate("/panel");
    } catch (error: any) {
      console.error("خطا در ثبت‌نام یا ورود:", error);
      if (error.response?.data?.errors) {
        console.log("پاسخ سرور:", error.response.data);
        setError("خطای اعتبارسنجی: لطفاً فیلدها را بررسی کنید.");
      } else {
        setError("خطایی در ثبت‌نام یا ورود رخ داد.");
      }
    }
  };
  


  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  // toggle dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  

  //const setUser = useUserStore((state) => state.setUsers);
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          برگشت به داشبورد
        </Link>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-5 right-5 px-3 py-1 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {darkMode ? "☀️ روشن" : "🌙 تاریک"}
      </button>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-black/900 text-title-sm dark:text-white/90 sm:text-title-md">
              ثبت نام
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              ایمیل و رمز عبور خود را برای ثبت نام وارد کنید!
            </p>
          </div>
          <div>
            {/* <div className="grid gap-3  sm:gap-5">
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                    fill="#EB4335"
                  />
                </svg>
                ثبت نام با گوگل
              </button>
            </div> */}
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                 
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} >
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1 text-right">
                    <Label>
                      نام<span className="text-error-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="firstname"
                      placeholder="نام کوچک خود را وارد کنید"
                      className="text-right"
                    />
                  </div>
                  <div className="sm:col-span-1 text-right">
                    <Label>
                      نام خانوادگی<span className="text-error-500">*</span>
                    </Label>
                    <Input
                    value={formData.lastName}
                    onChange={handleChange}
                      type="text"
                      // id="lname"
                      name="lastName"
                      placeholder="نام خانوادگی خود را وارد کنید"
                      className="text-right"
                    />
                  </div>
                </div>
                <div className="text-right">
                  <Label>
                    ایمیل<span className="text-error-500">*</span>
                  </Label>
                  <Input
                   value={formData.email}
                   onChange={handleChange}
                    type="email"
                    // id="email"
                    name="email"
                    placeholder="ایمیل خود را وارد کنید"
                    className="text-right"
                  />
                </div>
                <div className="text-right">
                  <Label>
                    رمز عبور<span className="text-error-500">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                    name="nationCode"
                     value={formData.nationCode}
                     onChange={handleChange}
                      placeholder="کد ملی خود را وارد کنید"
                      type={showNationCode ? "text" : "nationCode"}
                      className="text-right"
                    />
                    
                    <span
                      onClick={() => setShowNationCode(!showNationCode)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer left-4 top-1/2"
                    >
                      {showNationCode? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-right">
                  <Checkbox
                    className="w-5 h-5"
                    checked={isChecked}
                    onChange={setIsChecked}
                  />
                  <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
                    با ایجاد حساب کاربری، شما با{" "}
                    <span className="text-gray-800 dark:text-white/90">
                      شرایط و ضوابط
                    </span>{" "}
                    و{" "}
                    <span className="text-gray-800 dark:text-white">
                      سیاست حفظ حریم خصوصی
                    </span>{" "}
                    موافقت می‌کنید.
                  </p>
                </div>
                <div>
                  <button className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600">
                    ثبت نام
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                آیا قبلاً حساب کاربری دارید؟{" "}
                <Link
                  to="/signin"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  ورود
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
