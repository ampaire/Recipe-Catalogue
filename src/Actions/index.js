const fetchRecipesPending = () => ({
  type: 'FETCH_PRODUCTS_PENDING',
});

const fetchRecipesSuccess = recipes => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  recipes,
});

const fetchRecipesError = error => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});
const UPDATE_CATEGORY = category => ({
  type: 'UPDATE_CATEGORY',
  category,
});

const fetchSingleRecipes = details => ({
  type: 'FETCH_MEAL_SUCCESS',
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
