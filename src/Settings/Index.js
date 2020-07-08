/* eslint-disable no-plusplus */
export const getRecipes = state => state.recipes;
export const getRecipesPending = state => state.pending;
export const getRecipesError = state => state.error;
export const getImg = state => state.strMealThumb;
export const getArea = state => state.strArea;
export const getName = state => state.strMeal;
export const getIntructions = state => state.strInstructions;
export const getCategoriesList = state => state.categories;
export const categoryName = category => category.strCategory;
export const categoryDetails = category => category.strCategoryDescription;
export const categoryImage = category => category.strCategoryThumb;

export const getIngredient = meal => {
  const result = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] === '') {
      break;
    }
    result.push(meal[`strIngredient${i}`]);
  }
  return result;
};
