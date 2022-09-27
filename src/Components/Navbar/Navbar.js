import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="topnav">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/table">TableList</a>
    </div>
  )
}

export default Navbar;