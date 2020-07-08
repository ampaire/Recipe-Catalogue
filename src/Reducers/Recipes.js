const initialState = {
  pending: false,
  products: [],
  error: '',
  category: '',
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        pending: false,
        products: action.products,
      };
    case 'FETCH_PRODUCTS_ERROR':
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
