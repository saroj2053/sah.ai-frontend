import React from "react";
import useAuthStore from "../store/AuthStore";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { authUser, clearUser } = useAuthStore();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authUser?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to logout");
      }

      toast.success("Logout successful!");

      // clearing user from global state
      clearUser();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
