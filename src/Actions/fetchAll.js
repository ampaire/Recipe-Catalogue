import {
  fetchRecipesPending,
  fetchRecipesSuccess,
  fetchRecipesError,
} from './index';

function fetchAllRecipes(term) {
  return dispatch => {
    dispatch(fetchRecipesPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchRecipesSuccess(res.recipes));
      })
      .catch(error => {
        dispatch(fetchRecipesError(error));
      });
  };
}

export default fetchAllRecipes;
