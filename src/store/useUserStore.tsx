import { create } from "zustand";

type Lesson = {
  id: number;
  title: string;
  description?: string;
};

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
  userLessons: Lesson[];
  setUserLessons: (lessons: Lesson[]) => void;
  addUserLesson: (lesson: Lesson) => void;
  removeUserLesson: (id: number) => void;
  setToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
  addUser: (user: User) => void;
  setUsers: (users: User[]) => void;
  clearUsers: () => void;
  removeUser: (id: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  token: null,
  user: null,
  users: [],
  userLessons: [],

  setToken: (token) => set({ token }),
  setUser: (user) => set({ user }),
  logout: () => set({ token: null, user: null }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  setUsers: (users) => set({ users }),
  clearUsers: () => set({ users: [] }),

  setUserLessons: (lessons) => set({ userLessons: lessons }),
  addUserLesson: (lesson) =>
    set((state) => ({ userLessons: [...state.userLessons, lesson] })),
  removeUserLesson: (id) =>
    set((state) => ({
      userLessons: state.userLessons.filter((l) => l.id !== id),
    })),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
