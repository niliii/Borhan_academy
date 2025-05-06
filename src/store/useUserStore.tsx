import { create } from "zustand";

type Lesson = {
  id: number;
  title: string;
  description?: string;
};

type User = {
  fullName: string;
  mobile: string;
  nationalCode: string;
  id: number;
  name: string;
  email: string;
  token: string;
  username: string;
};
type UserLesson = {
  lessonId: number;
  lessonName: string;
};

interface UserStore {
  token: string | null;
  user: User | null;
  users: User[];
  userLessons: UserLesson[];
  setUserLessons: (lessons: Lesson[]) => void;
  addUserLesson: (lesson: UserLesson) => void;
  removeUserLesson: (lessonId: number) => void;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
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

  setUserLessons: (lessons) =>
    set({
      userLessons: lessons.map((lesson) => ({
        lessonId: lesson.id,
        lessonName: lesson.title,
      })),
    }),
  addUserLesson: (lesson) =>
    set((state) => ({ userLessons: [...state.userLessons, lesson] })),
  removeUserLesson: (lessonId) =>
    set((state) => ({
      userLessons: state.userLessons.filter(
        (lesson) => lesson.lessonId !== lessonId
      ),
    })),
  removeUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
