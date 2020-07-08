const initialState = {
  pending: false,
  recipes: [],
  error: '',
  category: '',
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECIPES_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_RECIPES_SUCCESS':
      return {
        ...state,
        pending: false,
        recipes: action.recipes,
      };
    case 'FETCH_RECIPES_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'UPDATE_CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default RecipesReducer;
