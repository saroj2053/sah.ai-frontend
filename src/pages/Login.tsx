import { MdEmail, MdLock } from "react-icons/md";
import { Link } from "react-router";

const Login = () => {
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
      <form className="box mx-auto mt-3" style={{ maxWidth: "550px" }}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              placeholder="e.g. john@example.com"
            />
            <span className="icon is-small is-left">
              <MdEmail size={24} />
            </span>
          </div>
          <p className="help"> Your email address will remain private.</p>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left">
            <input className="input" type="password" placeholder="********" />
            <span className="icon is-small is-left">
              <MdLock size={24} />
            </span>
          </div>
        </div>
        <div className="field mt-5">
          <button className="button is-link is-dark is-fullwidth">
            Log in
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
