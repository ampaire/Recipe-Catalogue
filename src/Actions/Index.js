import {
  SET_LOGGEDIN_USER,
  LOGIN,
  LOGOUT,
} from './default';

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
const BASE_URL = 'https://the-recipebook.herokuapp.com';

export {
  fetchProductsPending,
  FetchUserDetails,
  saveToken,
  LOGIN_USER,
  saveDetails,
  getDetails,
  getToken,
  LOGOUT_USER,
  BASE_URL,
};
