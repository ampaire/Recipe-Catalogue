import {
  FETCH_PRODUCTS_ERROR,
  FETCH_SINGLE_SUCCESS,
  FETCH_PRODUCTS_SUCCESS,
  SET_LOGGEDIN_USER,
  REMOVE_FAV,
  LOGIN,
  LOGOUT,
  ADD_FAVORITE,
} from './actions';

const fetchProductsPending = type => ({
  type,
});

const saveToken = token => {
  localStorage.setItem('token', JSON.stringify(token));
};

const saveDetails = details => {
  localStorage.setItem('details', JSON.stringify(details));
};

const getDetails = () => {
  const res = localStorage.getItem('details');
  return JSON.parse(res);
};

const getToken = () => {
  const res = localStorage.getItem('token');
  return JSON.parse(res);
};

const removeFav = playload => ({
  type: REMOVE_FAV,
  playload,
});

const fetchProductsSuccess = playload => ({
  type: FETCH_PRODUCTS_SUCCESS,
  playload,
});

const fetchProductsError = playload => ({
  type: FETCH_PRODUCTS_ERROR,
  playload,
});

const fetchSingleItem = playload => ({
  type: FETCH_SINGLE_SUCCESS,
  playload,
});

const LOGIN_USER = playload => ({
  type: LOGIN,
  playload,
});

const LOGOUT_USER = () => ({
  type: LOGOUT,
});

const FetchUserDetails = playload => ({
  type: SET_LOGGEDIN_USER,
  playload,
});

const AddFavorite = () => ({ type: ADD_FAVORITE });

const BASE_URL = 'https://intense-savannah-62345.herokuapp.com';

export {
  fetchProductsError,
  fetchProductsPending,
  FetchUserDetails,
  fetchProductsSuccess,
  fetchSingleItem,
  saveToken,
  LOGIN_USER,
  saveDetails,
  getDetails,
  removeFav,
  AddFavorite,
  getToken,
  LOGOUT_USER,
  BASE_URL,
};
