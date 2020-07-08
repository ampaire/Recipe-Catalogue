import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import RecipesReducer from './Recipes';
import SingleRecipeReducer from './SingleRecipe';
import { CategoriesReducer } from './Categories';

const finalReducer = combineReducers({
  Recipes: RecipesReducer,
  SingleRecipe: SingleRecipeReducer,
  categories: CategoriesReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
