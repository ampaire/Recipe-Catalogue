import React from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignupForm from '../Containers/SignUpForm';
import LoginForm from '../Containers/LoginForm';
import Explore from '../Containers/Explore';
import Main from './LandingPage';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/Explore" component={Explore} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
