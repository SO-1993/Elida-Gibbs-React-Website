import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-first-team">
        <a href="/first-team">First Team</a>
      </div>
      <div className="navbar-flexi-team">
        <a href="/flexi-team">Flexi Team</a>
      </div>
      <div className="navbar-sponsors">
        <a href="/sponsors">Sponsors</a>
      </div>
      <div className="navbar-join">
        <a href="/join">Join</a>
      </div>
    </nav>
  );
}

export default Navbar;
