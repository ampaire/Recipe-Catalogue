const fetchProductsPending = () => ({
  type: 'FETCH_PRODUCTS_PENDING',
});

const fetchProductsSuccess = products => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products,
});

const fetchProductsError = error => ({
  type: 'FETCH_PRODUCTS_ERROR',
  error,
});
const UPDATE_CATEGORY = category => ({
  type: 'UPDATE_CATEGORY',
  category,
});

const fetchSingleMeal = details => ({
  type: 'FETCH_MEAL_SUCCESS',
  details,
});

const fetchCategories = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

const resetSelected = () => ({ type: 'RESET' });

export {
  fetchProductsError,
  fetchProductsPending,
  fetchProductsSuccess,
  UPDATE_CATEGORY,
  fetchSingleMeal,
  resetSelected,
  fetchCategories,
};
