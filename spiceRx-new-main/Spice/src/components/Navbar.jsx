import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // By default, the navbar is visible.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 10% of the viewport height as threshold
      const threshold = window.innerHeight * 0.1;
      // If user scrolls down more than threshold, hide the navbar
      if (window.scrollY > threshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isVisible ? "scrolled" : "hidden"}`}>
      <div className="navbar-left">
        <div className="brand">
          Spice<span className="brand-highlight">Rx</span>
        </div>
      </div>
      <nav className="navbar-center">
        <NavLink
          to="/home"
          className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
        >
          Home
        </NavLink>
        <a href="/home#statistics" className="nav-item">
          Statistics
        </a>
        <NavLink
          to="/how-to-use"
          className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
        >
          How to Use
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
        >
          Contact Us
        </NavLink>
      </nav>
      <div className="navbar-right">
        <a
          href="https://cosylab.iiitd.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button cosylab"
        >
          CoSyLab
        </a>
      </div>
    </header>
  );
}

export default NavBar;
