import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Link } from "react-router";
import { Formik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const registerValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <>
      <section className="hero is-small mt-6">
        <div className="hero-body mx-auto has-text-centered">
          <p className="title mb-2">Create a new SahAI account!</p>
          <Link to="/login" className="subtitle is-6 has-text-link">
            Already have an account? Log in here.
          </Link>
        </div>
      </section>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          console.log(values);
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
            <div className="grid is-two-columns mb-0">
              <div className="field">
                <label className="label">First Name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    name="firstName"
                    type="text"
                    placeholder="e.g. John"
                  />
                  <span className="icon is-small is-left">
                    <MdPerson size={24} />
                  </span>
                </div>
                {errors.firstName && touched.firstName && (
                  <p className="help is-danger mb-4">{errors.firstName}</p>
                )}
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. Doe"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="lastName"
                  />
                  <span className="icon is-small is-left">
                    <MdPerson size={24} />
                  </span>
                </div>
                {errors.lastName && touched.lastName && (
                  <p className="help is-danger mb-4">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. john@example.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
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
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="********"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="password"
                />
                <span className="icon is-small is-left">
                  <MdLock size={24} />
                </span>
              </div>
            </div>
            {touched.password && errors.password && (
              <p className="help is-danger mb-4">{errors.password}</p>
            )}
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="********"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="confirmPassword"
                />
                <span className="icon is-small is-left">
                  <MdLock size={24} />
                </span>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="help is-danger mb-4">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="field mt-5">
              <button
                type="submit"
                className="button is-link is-dark is-fullwidth"
                disabled={isSubmitting || Object.keys(errors).length > 0}
              >
                Create account
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Register;
