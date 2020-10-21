import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="top-menu">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact-us">CONTACT US</Link>
      </div>
      <div className="social-top">
        Lorem ipsum dolor, sit amet.
      </div>
    </header>
  );
}
export default Header;