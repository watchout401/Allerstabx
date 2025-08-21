import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
  const location = useLocation()
  
  return (
    <header className="site-header">
      <div className="header-left">
        <Link to="/" className="brand">AllerStabX</Link>
      </div>
      <nav className="main-nav">
        <Link 
          to="/" 
          className={location.pathname === '/' ? 'active' : ''} 
        >
          Home
        </Link>
        <Link 
          to="/faq" 
          className={location.pathname === '/faq' ? 'active' : ''} 
        >
          FAQ
        </Link>
        <Link 
          to="/how-to-use" 
          className={location.pathname === '/how-to-use' ? 'active' : ''} 
        >
          How To Use
        </Link>
        <Link 
          to="/contact" 
          className={location.pathname === '/contact' ? 'active' : ''} 
        >
          Contact Us
        </Link>
      </nav>
      <div className="header-right">
  <a 
    href="https://cosylab.iiitd.edu.in/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="btn-cosylab"
  >
    CosyLab
  </a>
</div>
    </header>
  )
}