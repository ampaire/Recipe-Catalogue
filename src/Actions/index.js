const fetchRecipesPending = () => ({
  type: 'FETCH_RECIPES_PENDING',
});

const fetchRecipesSuccess = recipes => ({
  type: 'FETCH_RECIPES_SUCCESS',
  recipes,
});

const fetchRecipesError = error => ({
  type: 'FETCH_RECIPES_ERROR',
  error,
});
const UPDATE_CATEGORY = category => ({
  type: 'UPDATE_CATEGORY',
  category,
});

const fetchSingleRecipes = details => ({
  type: 'FETCH_RECIPE_SUCCESS',
  details,
});

const fetchCategories = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

const resetSelected = () => ({ type: 'RESET' });

export {
  fetchRecipesError,
  fetchRecipesPending,
  fetchRecipesSuccess,
  UPDATE_CATEGORY,
  fetchSingleRecipes,
  resetSelected,
  fetchCategories,
};
