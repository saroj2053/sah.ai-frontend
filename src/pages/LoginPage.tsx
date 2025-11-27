import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import type { LoginFormData } from "../types/form";
import useLogin from "../hooks/useLogin";

const LoginPage: React.FC = () => {
  const { login, loading } = useLogin();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const commonPasswords = [
    "password",
    "12345678",
    "qwerty12",
    "hello123",
    "87654321",
  ];

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      )
      .notOneOf(commonPasswords, "This password is too common.")
      .required("Password is required"),
  });

  return (
    <>
      <section className="hero is-small mt-6">
        <div className="hero-body mx-auto has-text-centered">
          <p className="title mb-2">Log in to your SahAI account!</p>
          <Link to="/register" className="subtitle is-6 has-text-link">
            Don't have an account? Register here.
          </Link>
        </div>
      </section>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={async (values: LoginFormData) => {
          await login(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          values,
          errors,
          touched,
        }) => (
          <form
            className="box mx-auto mt-3"
            style={{ maxWidth: "550px" }}
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. john@example.com"
                />
                <span className="icon is-small is-left">
                  <MdEmail size={24} />
                </span>
              </div>
            </div>
            {touched.email && errors.email && (
              <p className="help is-danger mb-4">{errors.email}</p>
            )}

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="********"
                />
                <span className="icon is-small is-left">
                  <MdLock size={24} />
                </span>
                <span
                  className="icon is-small is-right is-clickable"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <FaEye size={24} />
                  ) : (
                    <FaEyeSlash size={24} />
                  )}
                </span>
              </div>
            </div>
            {touched.password && errors.password && (
              <p className="help is-danger">{errors.password}</p>
            )}
            <div className="field mt-5">
              <button
                type="submit"
                className="button is-link is-dark is-fullwidth"
                disabled={
                  isSubmitting || Object.keys(errors).length > 0 || loading
                }
              >
                Log in
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginPage;
