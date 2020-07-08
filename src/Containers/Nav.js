import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav">
    <Link className="home-link" to="/">
      <h4 className="g-text"> The CookBook</h4>
    </Link>
  </div>
);

export default NavBar;
