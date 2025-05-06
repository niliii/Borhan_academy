import { useState, ChangeEvent, FormEvent } from "react";

function isValidIranianNationalCode(input: string): boolean {
  if (!/^\d{10}$/.test(input)) return false;
  const check = +input[9];
  const sum = [...input].slice(0, 9).reduce((acc, digit, i) => acc + (+digit * (10 - i)), 0);
  const remainder = sum % 11;
  return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder);
}

export const useSignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    nationalCode: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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

    try {
      const response = await fetch("/api/Account/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("ثبت‌نام انجام نشد");

      setError("");
      setSuccess("ثبت‌نام با موفقیت انجام شد.");
    } catch (err) {
      setError("خطا در ارتباط با سرور");
      setSuccess("");
    }
  };

  return { formData, handleChange, handleSubmit, error, success };
};
