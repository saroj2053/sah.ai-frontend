import { Link } from "react-router";

const LandingPage: React.FC = () => {
  return (
    <div>
      <section className="hero has-background-link">
        <div className="hero-body has-text-centered">
          <p className="title is-2">Unlock Your Potential with SahAI</p>
          <p className="subtitle is-5 mt-4 has-text-white">
            Your intelligent partner for streamlining workflows, generating
            creative content, and solving complex problems.
          </p>
          <Link to="/register" className="button is-light">
            <strong>Get Started for Free</strong>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">
            Everything you need to supercharge your productivity
          </h2>
          <div className="columns is-centered mt-5">
            <div className="column is-3">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">Intelligent Automation</p>
                  <p>
                    Automate your repetitive tasks and focus on what truly
                    matters. Let SahAI handle the busywork.
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">Creative Content</p>
                  <p>
                    Generate high-quality blog posts, marketing copy, and emails
                    in seconds. Overcome writer's block forever.
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-3">
              <div className="card">
                <div className="card-content has-text-centered">
                  <p className="title is-4">Advanced Data Analysis</p>
                  <p>
                    Uncover hidden insights from your data with powerful and
                    intuitive analytical capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">
            Get Results in 3 Simple Steps
          </h2>
          <div className="columns is-centered is-vcentered mt-5">
            <div className="column has-text-centered">
              <p className="title is-1 has-text-grey-light">1</p>
              <p className="title is-4">Sign Up</p>
              <p>Create your free SahAI account in just a few seconds.</p>
            </div>
            <div className="column has-text-centered">
              <p className="title is-1 has-text-grey-light">2</p>
              <p className="title is-4">Define Your Task</p>
              <p>
                Tell SahAI what you need, from writing an email to analyzing a
                dataset.
              </p>
            </div>
            <div className="column has-text-centered">
              <p className="title is-1 has-text-grey-light">3</p>
              <p className="title is-4">Get Instant Results</p>
              <p>
                Watch as SahAI delivers high-quality, accurate results in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
