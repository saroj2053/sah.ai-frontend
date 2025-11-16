import { MdEmail, MdLock, MdPerson } from "react-icons/md";

const Register = () => {
  return (
    <>
      <section className="hero is-light is-info is-small">
        <div className="hero-body">
          <p className="title">Create a new SahAI account!</p>
          <p className="subtitle is-6 mt-2">
            Please enter your details to create an account.
          </p>
        </div>
      </section>
      <form className="box mx-auto mt-6" style={{ maxWidth: "550px" }}>
        <div className="grid">
          <div className="field">
            <label className="label">First Name</label>
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="e.g. Alex" />
              <span className="icon is-small is-left">
                <MdPerson size={24} />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="e.g. Smith" />
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
              placeholder="e.g. alex@example.com"
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
          <button className="button is-primary  is-fullwidth">
            Create account
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
