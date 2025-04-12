import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
  token: string;
} | null;

type UserStore = {
  
  users: User[];
  addUser: (user: User) => void;
  setUser: (users: User[]) => void;
  clearUser: () => void;
};
export const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  setUser: (users) => set({ users }),
  clearUser: () => set({ }),
}));