import { create } from "zustand";
import ProfileAPI from "../api/ProfileAPI";
import Cookies from "js-cookie";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  set: ({ user }) => set({ user }),

  rehydrate: async () => {
    try {
      set({ loading: true });
      const token = Cookies.get("token");
      if(!token) {
        set({ user: null,loading: false });
        return;
      }
      const userData = await ProfileAPI();
      set({ user: userData, loading: false });
    } catch (err) {
      console.error("Failed to rehydrate user data:", err);
      set({ user: null, loading: false });
    }
  },
}));

export default useAuthStore;
