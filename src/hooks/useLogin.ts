import { useState } from "react";
import type { LoginFormData } from "../types/form";
import useAuthStore from "../store/AuthStore";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthStore();

  const login = async (formData: LoginFormData) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success === false || data.errorCode === "BAD_CREDENTIALS") {
        toast.error(data.message);
        throw new Error(data.message || "Invalid email or password");
      }

      // Updating application state to reflect logged-in user
      setAuthUser(data);
      toast.success("Login successful!");
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
