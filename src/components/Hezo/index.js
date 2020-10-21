import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Hezo() {
  return (
    <div className="hezo">
      <h1>Hezo</h1>
      <div className="main-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>
    </div>
  );
}
export default Hezo;