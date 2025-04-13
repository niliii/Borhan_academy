import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
  token: string;
} ;

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};


export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  
}));
