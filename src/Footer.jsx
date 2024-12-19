import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <h4>About Elida Gibbs F.C.</h4>
        <p>
          Founded in 2020, we are a North-Leeds-based football club focused on
          developing talent and supporting the local area.
        </p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/first-team">First Team</a>
          </li>
          <li>
            <a href="/flexi-team">Flexi Team</a>
          </li>
          <li>
            <a href="/sponsors">Join Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://instagram.com/elidagibbsfc">Instagram</a>
          </li>
          <li>
            <a href="https://youtube.com/elidagibbsfc">YouTube</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <p>&copy; 2024 Elida Gibbs Football Club All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
