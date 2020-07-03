/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import MdPaperPlane from 'react-ionicons/lib/MdPaperPlane';
import IosLogIn from 'react-ionicons/lib/IosLogIn';

const Main = () => (
  <div className="app-container">
    <div className="btns">
      <div className="btn-outlined">
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <IosLogIn color="#ffff" className="icons" />
            SignUp to get started
          </button>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <IosLogIn color="#ffff" className="icons" />
            Login
          </button>
        </div>
        <div>
          <button
            className="btn btn-outline-primary"
            type="button"
          >
            <MdPaperPlane color="#ffff" className="icons" />
            Explore
          </button>
        </div>
      </div>
      <div>
        <h2 className="app-title">The CookBook</h2>
        <blockquote>
          <p className="app-index-quote">
            Explore the world's Best dishes
          </p>
          <footer className="author">― Effie Phemia Ampaire</footer>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Main;
