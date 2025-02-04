import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/how-to-use">How to Use</Link>
    </nav>
  );
}

export default Header;