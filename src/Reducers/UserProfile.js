import {
  getToken, saveToken, saveDetails, getDetails,
} from '../Actions/Index';

import {
  LOGIN, LOGOUT, SET_LOGGEDIN_USER, LOGIN_USER_PENDING,
} from '../Actions/actions';

const initialState = {
  loged_in: false,
  auth_token: getToken() !== null ? getToken() : '',
  details: getDetails() !== null ? getDetails() : {
    details: {},
  },
  pending: false,
  error: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      saveToken(action.playload.auth_token);
      return {
        ...state,
        loged_in: true,
        auth_token: getToken(),
        pending: false,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        loged_in: false,
        auth_token: '',
        details: getDetails(),
        token: getToken(),
      };
    case SET_LOGGEDIN_USER:
      saveDetails(action.playload);
      return {
        ...state,
        pending: false,
        details: getDetails(),
      };
    case LOGIN_USER_PENDING:
      return {
        ...state,
        pending: true,
      };
    default:
      return state;
  }
}

export default userReducer;
