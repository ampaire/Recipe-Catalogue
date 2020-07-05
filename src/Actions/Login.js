import {
  fetchProductsError,
  fetchProductsPending,
  LOGIN_USER,
  BASE_URL,
} from './Index';
import { SET_LOGGEDIN_USER } from './actions';

function loginUser(data) {
  return dispatch => {
    dispatch(fetchProductsPending(SET_LOGGEDIN_USER));
    fetch(`${BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }

        if (res.auth_token !== undefined) {
          dispatch(LOGIN_USER(res));
        }
        return res;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default loginUser;
