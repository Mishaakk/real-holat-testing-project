// src/store/authStore.ts
import { create } from "zustand";

interface AuthStore {
  token: string | null;
  setToken: (token: string) => void;
  clearSession: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("token"),

  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token });
  },

  clearSession: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));
