import {
  UPDATE_CATEGORY,
  fetchSingleMeal,
} from '../../Actions/index';

describe('update category', () => {
  it('should create an action to change category', () => {
    const text = 'Beff';
    const expectedAction = {
      type: 'UPDATE_CATEGORY',
      category: text,
    };
    expect(UPDATE_CATEGORY(text)).toEqual(expectedAction);
  });
});

describe('get recipe details', () => {
  it('should get recipe details', () => {
    const data = { name: 'chicken', category: 'Chicken' };
    const expectedAction = {
      type: 'FETCH_MEAL_SUCCESS',
      details: data,
    };
    expect(fetchSingleMeal(data)).toEqual(expectedAction);
  });
});
