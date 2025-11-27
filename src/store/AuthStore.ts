import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthUserState = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
} | null;

type AuthStore = {
  authUser: AuthUserState;
  setAuthUser: (user: AuthUserState) => void;
  clearUser: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      authUser: null,
      setAuthUser: (user: AuthUserState) => set({ authUser: user }),
      clearUser: () => set({ authUser: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
