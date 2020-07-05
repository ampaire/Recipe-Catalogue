import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './UserProfile';

const finalReducer = combineReducers({
  user: userReducer,
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
