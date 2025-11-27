import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar p-4 is-flex is-align-items-center"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div>
            <Link to="/" className="navbar-item is-flex is-align-items-center">
              <svg
                width="44"
                height="33"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="clip0_2841_305">
                    <rect
                      width="30"
                      height="20"
                      fill="white"
                      x="0"
                      y="0"
                    ></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#clip0_2841_305)">
                  <path
                    d="M8.96457 4.90144L9.75381 7.56362C9.97379 8.30559 10.5541 8.88589 11.2961 9.10586L13.9582 9.8951C14.2376 9.97787 14.2376 10.3735 13.9582 10.4563L11.2961 11.2455C10.5541 11.4655 9.97379 12.0458 9.75381 12.7878L8.96457 15.4499C8.8818 15.7293 8.48617 15.7293 8.4034 15.4499L7.61416 12.7878C7.39419 12.0458 6.81389 11.4655 6.07192 11.2455L3.40974 10.4563C3.13035 10.3735 3.13035 9.97787 3.40974 9.8951L6.07192 9.10586C6.81389 8.88589 7.39419 8.30559 7.61416 7.56362L8.4034 4.90144C8.48617 4.62205 8.8818 4.62205 8.96457 4.90144Z"
                    fill="#022D94"
                  ></path>

                  <path
                    d="M3.69443 0.462415L4.15425 2.01349C4.28245 2.44572 4.62051 2.78396 5.05275 2.91198L6.60382 3.3718C6.76659 3.41999 6.76659 3.65064 6.60382 3.69883L5.05275 4.15865C4.62051 4.28685 4.28227 4.62491 4.15425 5.05714L3.69443 6.60821C3.64624 6.77099 3.41560 6.77099 3.36741 6.60821L2.90758 5.05714C2.77939 4.62491 2.44132 4.28666 2.00909 4.15865L0.45802 3.69883C0.295243 3.65064 0.295243 3.41999 0.45802 3.3718L2.00909 2.91198C2.44132 2.78378 2.77957 2.44572 2.90758 2.01349L3.36741 0.462415C3.41560 0.299638 3.64624 0.299638 3.69443 0.462415Z"
                    fill="#006CFF"
                    transform="translate(14.5,1.5) scale(1.15)"
                  ></path>

                  <path
                    d="M3.69443 0.462415L4.15425 2.01349C4.28245 2.44572 4.62051 2.78396 5.05275 2.91198L6.60382 3.3718C6.76659 3.41999 6.76659 3.65064 6.60382 3.69883L5.05275 4.15865C4.62051 4.28685 4.28227 4.62491 4.15425 5.05714L3.69443 6.60821C3.64624 6.77099 3.41560 6.77099 3.36741 6.60821L2.90758 5.05714C2.77939 4.62491 2.44132 4.28666 2.00909 4.15865L0.45802 3.69883C0.295243 3.65064 0.295243 3.41999 0.45802 3.3718L2.00909 2.91198C2.44132 2.78378 2.77957 2.44572 2.90758 2.01349L3.36741 0.462415C3.41560 0.299638 3.64624 0.299638 3.69443 0.462415Z"
                    fill="#1055C9"
                    transform="translate(12, 12)scale(0.95)"
                  />
                </g>
              </svg>
              <span
                className="title is-4"
                style={{ marginLeft: "-10px", letterSpacing: "0.05em" }}
              >
                SahAI
              </span>
            </Link>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className="navbar-menu is-justify-content-center"
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-link is-dark">
                    <strong>Get Started</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
