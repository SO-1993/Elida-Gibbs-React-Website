import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <div className="overview">
          <h4>About Elida Gibbs F.C.</h4>
          <p>
            Founded in 2020, we are a North-Leeds-based football club focused on
            developing talent and supporting the local area.
          </p>
        </div>
      </div>

      <div className="addresses">
        <h4>Matchday address</h4>
        <p>Bedquilts Recreation Ground, Leeds, LS16 8BX</p>
        <h4>Training address</h4>
        <p>Cockburn School, Gipsy Lane, Beeston, Leeds, LS11 5TT</p>
      </div>

      <div className="quick-links">
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
            <a href="/sponsors">Sponsors</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="follow-us">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="https://instagram.com/elidagibbsfc">Instagram</a>
          </li>
          <li>
            <a href="https://www.youtube.com/@ElidaGibbsAFC">YouTube</a>
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
