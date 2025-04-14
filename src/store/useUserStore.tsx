import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  setUsers: (users: User[]) => void;
  clearUsers: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  setUsers: (users) => set({ users }),
  clearUsers: () => set({ users: [] }),
}));
