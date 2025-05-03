import axios from "axios";


const api = axios.create({
  
  baseURL: "https://demo-api.darkube.app/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const AccountAPI = {
  
  login: (data: { username: string; password: string }) =>
    api.post("/Account/token", data),

  addUserLesson: (data: { userId: number; lessonId: number }) =>
    api.post("/UserLesson/Add", data),

  getUserLessons: (user: { id: { username: string; } | null; username: string; }, Number: NumberConstructor, userId: number) =>
    api.get(`/UserLesson/GetUserLessons/${userId}`),

  register: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => api.post("/Account/Register", data),

  getAllUsers: () => api.get("/Account/GetAllUsers"),
  getAllLessons: () => api.get("/Account/getAllLessons"),
  deleteUser: (id: number) => api.delete(`/Account/DeleteUser/${id}`),
  
};
