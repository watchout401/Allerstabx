import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Footer Left */}
        <div className="footer-left">
          <h2 className="footer-title">AllerStabX</h2>
          <p className="footer-description">
            Search proteins & peptides with AllerStabX
          </p>
        </div>

        {/* Footer Center */}
        <div className="footer-center">
          <p className="copyright">Copyright © 2025 All rights reserved</p>
          <div className="footer-license-img">
            <img
              src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
              alt="Creative Commons License"
            />
          </div>
          <p className="footer-license">
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/3.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              This work is licensed under a Creative Commons
              Attribution-NonCommercial-ShareAlike 3.0 Unported License
            </a>
          </p>
          <p className="footer-org">
            <a
              href="https://iiitd.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indraprastha Institute of Information Technology Delhi (IIITD)
            </a>{" "}
            |{" "}
            <a
              href="http://faculty.iiitd.ac.in/~bagler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Ganesh Bagler
            </a>
          </p>
        </div>

        {/* Footer Right */}
        <div className="footer-right">
          <h3 className="footer-contact-title">Get In Touch</h3>
          <p className="footer-email">bagler+AllerStabX@iiitd.ac.in</p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/ganesh.bagler"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <i className="bi bi-facebook icon"></i>
            </a>
            <a
              href="https://twitter.com/gansbags"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <i className="bi bi-twitter icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ganeshbagler"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <i className="bi bi-linkedin icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}