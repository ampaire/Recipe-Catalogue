import {
  fetchRecipesPending,
  fetchSingleRecipes,
  fetchRecipesError,
} from './index';

function fetchRecipe(id) {
  return dispatch => {
    dispatch(fetchRecipesPending());
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchSingleRecipes(res.recipes[0]));
        return res;
      })
      .catch(error => {
        dispatch(fetchRecipesError(error));
      });
  };
}

export default fetchRecipe;
