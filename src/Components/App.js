import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './LandingPage';
import NavBar from '../Containers/Nav';
import AllMeals from '../Containers/Recipes';
import MealDetails from '../Containers/ItemDetails';
import AllCategories from '../Containers/Explore';

const App = () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/explore" component={AllCategories} exact />
      <Route path="/category/:category" component={AllMeals} />
      <Route path="/recipe/:id" component={MealDetails} />
    </Switch>
  </div>
);

export default App;
