import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Link } from "react-router";

const Register = () => {
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
      <form className="box mx-auto mt-3" style={{ maxWidth: "550px" }}>
        <div className="grid is-two-columns mb-0">
          <div className="field">
            <label className="label">First Name</label>
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="e.g. John" />
              <span className="icon is-small is-left">
                <MdPerson size={24} />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="e.g. Doe" />
              <span className="icon is-small is-left">
                <MdPerson size={24} />
              </span>
            </div>
          </div>
        </div>
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
        <div className="field">
          <label className="label">Confirm Password</label>
          <div className="control has-icons-left">
            <input className="input" type="password" placeholder="********" />
            <span className="icon is-small is-left">
              <MdLock size={24} />
            </span>
          </div>
        </div>
        <div className="field mt-5">
          <button className="button is-link is-dark is-fullwidth">
            Create account
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
