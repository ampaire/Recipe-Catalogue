import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from './index';

function fetchAllRecipes(term) {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchProductsSuccess(res.meals));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchAllRecipes;
