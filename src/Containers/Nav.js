import React from 'react';
import { Link } from 'react-router-dom';
import food from '../Assets/food.png';

const NavBar = () => (
  <div className="nav">
    <Link className="home-link" to="/">
      <img className="logo-img" src={food} alt="logo" />
      <h4 className="g-text"> The CookBook</h4>
    </Link>
  </div>
);

export default NavBar;
