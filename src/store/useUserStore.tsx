import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
  token: string;
};

interface UserStore {
  token: string | null;
  user: {
    username: string;
  } | null;
  users: User[];
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
  addUser: (user: User) => void;
  setUsers: (users: User[]) => void;
  clearUsers: () => void;
  
}

export const useUserStore = create<UserStore>((set) => ({
  token: null,
  user: null,
  users: [],
  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  logout: () => set({ token: null, user: null }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  setUsers: (users) => set({ users }),
  clearUsers: () => set({ users: [] }),
}));
