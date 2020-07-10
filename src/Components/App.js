import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import AllMeals from '../Containers/AllRecipes';
import MealDetails from '../Containers/ItemDetails';
import Main from './LandingPage';
import NavBar from '../Containers/Nav';
import AllCategories from '../Containers/Explore';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/explore" component={AllCategories} exact />
      <Route path="/category/:category" component={AllMeals} />
      <Route path="/meal/:id" component={MealDetails} />
    </Switch>
  </div>
);

export default App;
