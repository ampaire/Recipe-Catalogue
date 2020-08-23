/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav header">
    <Link className="home-link" to="/">
      <h4 className=" Nav-text"> The CookBook 😋</h4>
    </Link>
  </div>
);

export default NavBar;
