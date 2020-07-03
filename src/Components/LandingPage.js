import React from 'react';
import MdPaperPlane from 'react-ionicons/lib/MdPaperPlane';
import MdLogIn from 'react-ionicons/lib/MdLogIn';
import { Link } from 'react-router-dom';

const Main = () => (
  <div className="app-container">
    <div className="btns">
      <div className="btn-outlined">
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <Link to="/signup" className="links">
              <MdLogIn color="#ffff" className="icons" />
              SignUp to get started
            </Link>
          </button>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <Link to="/login" className="links">
              <MdLogIn color="#ffff" className="icons" />
              Login
            </Link>
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <Link to="/Explore" className="links">
              <MdPaperPlane color="#ffff" className="icons" />
              Explore
            </Link>
          </button>
        </div>
      </div>
      <div>
        <h2 className="app-title">The CookBook</h2>
        <blockquote>
          <p className="app-index-quote">
            Explore the world&apos;s Best dishes
          </p>
          <footer className="author">― Effie Phemia Ampaire</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Main;
