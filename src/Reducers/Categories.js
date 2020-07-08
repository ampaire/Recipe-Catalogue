const initialState = {
  pending: false,
  categories: [],
  error: '',
};

export const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        pending: false,
        categories: action.categories,
      };
    case 'FETCH_RECIPES_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default CategoriesReducer;
