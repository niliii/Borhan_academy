import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Account APIs
export const AccountAPI = {
  login: (data: { username: string; password: string }) =>
    axios.post("/api/Account/token", data),
  

  register: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => api.post("/Account/Register", data),

  getAllUsers: () => api.get("/Account/GetAllUsers"),
};
