import React from "react";
import type { RegisterFormData } from "../types/form";
import useAuthStore from "../store/AuthStore";

const useRegister = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const { setAuthUser } = useAuthStore();

  const register = async (formData: RegisterFormData) => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/user/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      setAuthUser(data);
    } catch (error) {
      console.error("Error registering user:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
};

export default useRegister;
