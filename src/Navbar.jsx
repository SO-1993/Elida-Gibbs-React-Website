import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            className="navbar-elida-gibbs-badge"
            src="./utils/images/elida_gibbs_badge.png"
            alt="Elida Gibbs crest"
          />
        </Link>
      </div>

      <div className="navbar-home">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-first-team">
        <Link to="/first-team">First Team</Link>
      </div>
      <div className="navbar-contact">
        <Link to="/leaderboard">Leaderboard</Link>{" "}
      </div>
      <div className="navbar-sponsors">
        <Link to="/sponsors">Sponsors</Link>
      </div>
      <div className="navbar-contact">
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
