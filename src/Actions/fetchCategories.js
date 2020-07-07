import {
  fetchProductsPending,
  fetchCategories,
  fetchProductsError,
} from './index';

function getCategories() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCategories(res.categories));
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default getCategories;
