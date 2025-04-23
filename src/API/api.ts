import axios from "axios";

// ساخت یک instance اختصاصی از axios
const api = axios.create({
  baseURL: "https://demo-api.darkube.app/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

// اضافه کردن توکن به درخواست‌ها با استفاده از interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // یا از Zustand بگیر
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AccountAPI = {
  // Login فقط با username و password
  login: (data: { username: string; password: string }) =>
    api.post("/Account/token", data),

  // Register با اطلاعات کامل
  register: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => api.post("/Account/Register", data),

  // گرفتن لیست کاربران
  getAllUsers: () => api.get("/Account/GetAllUsers"),
};
