import allMealsReducer from '../../Reducers/Recipes';

const initialState = {
  pending: false,
  products: [],
  error: undefined,
  category: undefined,
};

describe('update categpry', () => {
  it('should be able to change category', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_PENDING' })).toEqual({ ...initialState, pending: true });
  });
  it('should update the current state of products', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_SUCCESS', products: ['beef', 'chicken'] })).toEqual({ ...initialState, pending: false, products: ['beef', 'chicken'] });
  });
});
