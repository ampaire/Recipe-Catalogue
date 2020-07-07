import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <div className="hamburger">
      <div className="line" />
      <div className="line" />
      <div className="line" />
    </div>
    <h4 className="current-text">The CookBook</h4>
    <ul className="nav-links">
      <li>
        <Link to="/items">Home</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
