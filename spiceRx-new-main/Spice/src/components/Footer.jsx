import "../components/Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">SpiceRx</h2>
          <p className="footer-description">
            A resource to explore health effects of culinary spices and herbs
          </p>
        </div>

        <div className="footer-center">
          <p className="copyright">Copyright 2025 All rights reserved</p>

          <img
            src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png"
            alt="Creative Commons License"
          />

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
          <p className="footer-license-img">
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/3.0/"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </p>
          <p className="footer-org">
            <a
              href="https://iiitd.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indraprastha Institute of Information Technology Delhi (IIITD -
              Delhi)
            </a>{" "}
            |{" "}
            <a
              href="http://faculty.iiitd.ac.in/~bagler/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Ganesh Bagler
            </a>
          </p>
        </div>

        <div className="footer-right">
          <h3 className="footer-contact-title">Get In Touch</h3>
          <p className="footer-email">bagler+SpiceRx@iiitd.ac.in</p>
          <div className="footer-icons">
            <a
              href="https://www.facebook.com/ganesh.bagler"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaFacebookF className="icon" />
            </a>
            <a
              href="https://twitter.com/gansbags"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ganeshbagler"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedinIn className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
