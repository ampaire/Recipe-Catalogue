import {
  fetchProductsPending, fetchProductsError, FetchUserDetails, BASE_URL,
} from './Index';

import { LOGIN_USER_PENDING } from './actions';

function fetchUser(token) {
  return dispatch => {
    dispatch(fetchProductsPending(LOGIN_USER_PENDING));
    fetch(`${BASE_URL}/profile`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(FetchUserDetails(res));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}
export default fetchUser;
