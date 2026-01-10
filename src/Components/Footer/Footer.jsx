import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">


        <div className="footer-brand">
          <span className="brand-name">
            <span className="brand-highlight">Skill</span>Map
          </span>
          <span className="copyright">© 2025</span>
        </div>


        <nav className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">FAQ</a>
        </nav>


        <div className="footer-social">
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="GitHub">Github</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
