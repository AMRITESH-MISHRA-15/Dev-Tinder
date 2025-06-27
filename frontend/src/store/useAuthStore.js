import { create } from "zustand";
import ProfileAPI from "../api/ProfileAPI";

const useAuthStore = create((set) => ({
  user: null,
  set: ({ user }) => set({ user }),

  rehydrate: async () => {
    try {
      const userData = await ProfileAPI();
      set({ user: userData });
    } catch (err) {
      console.error("Rehydration failed:", err);
      set({ user: null });
    }
  },
}));

export default useAuthStore;
