import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";
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


export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    nationalCode: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); 
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    if (!isValidIranianNationalCode(formData.nationalCode)) {
      setError("کد ملی وارد شده معتبر نیست.");
      setSuccess("");
      return;
    }
  
    const [firstName, ...rest] = formData.fullName.trim().split(" ");
    const lastName = rest.join(" ") || "نام‌خانوادگی";
  
    const bodyData = {
      FirstName: firstName,
      LastName: lastName,
      Mobile: formData.mobile,
      NationCode: formData.nationalCode,
    };
  
    try {
      const response = await fetch("https://demo-api.darkube.app/api/Account/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
        
      });
  
      const data = await response.json();
      console.log("Response:", data);
  
      if (!response.ok) {
        throw new Error(data?.message || "ثبت‌نام انجام نشد");
      }
      
      navigate("/panel");
    } catch (err: any) {
      setError(err.message || "خطا در ارتباط با سرور");
      setSuccess("");
    }
  };
  

  return (
    <section className="relative w-full py-16 bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('./assets/images/rigister.jpg')" }}
      ></div>

      <div className="relative container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 text-center lg:text-left space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            بیش از 1000 دانش‌پذیر حقوقی
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            گروه آموزشی برهان با بیشترین درصد قبولی در سال‌های اخیر در آزمون‌های
            حقوقی، وکالت و قضاوت توانسته است دانش‌پذیران بسیاری را با سطح علمی
            بالا به جامعه ارائه دهد.
          </p>
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
        <div className="lg:w-1/3 bg-white text-gray-900 p-6 lg:p-8 rounded-2xl shadow-xl mt-10 lg:mt-0">
          <h3 className="text-xl font-semibold text-center text-blue-600">
            همین الان ثبت نام کنید
          </h3>
          <p className="text-sm text-gray-600 text-center mt-2">
            فرم زیر را پر کنید، ما در اسرع وقت با شما تماس خواهیم گرفت.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="نام و نام خانوادگی"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="شماره موبایل"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="nationalCode"
              value={formData.nationalCode}
              onChange={handleChange}
              placeholder="کد ملی"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all"
            >
              ثبت نام
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
