import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-home">
        <a href="/">Home</a>
      </div>
      <div className="navbar-first-team">
        <a href="/first-team">First Team</a>
      </div>
      <div className="navbar-flexi-team">
        <a href="/flexi-team">Flexi Team</a>
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
