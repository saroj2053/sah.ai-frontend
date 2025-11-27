import { useState } from "react";
import type { LoginFormData } from "../types/form";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (formData: LoginFormData) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/v1/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log("Login response data:", data);

      if (data.success === false || data.errorCode === "BAD_CREDENTIALS") {
        throw new Error(data.message || "Invalid email or password");
      }

      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
