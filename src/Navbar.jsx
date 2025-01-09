import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="navbar-elida-gibbs-badge"
        src="./utils/images/elida_gibbs_badge.png"
        alt="Elida Gibbs crest"
      />
      <div className="navbar-home">
        <a href="/">Home</a>
      </div>
      <div className="navbar-first-team">
        <a href="/first-team">First Team</a>
      </div>
      <div className="navbar-contact">
        <a href="/leaderboard">Leaderboard</a>
      </div>
      <div className="navbar-sponsors">
        <a href="/sponsors">Sponsors</a>
      </div>
      <div className="navbar-contact">
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
