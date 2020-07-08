const initialState = {
  pending: false,
  details: {},
  error: '',
};

const SingleRecipeReducer = (state = initialState, action) => {
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
        details: action.details,
      };
    case 'FETCH_RECIPES_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default SingleRecipeReducer;
