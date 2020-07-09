export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;
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
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`] === '') {
      break;
    }
    result.push(meal[`strIngredient${i}`]);
  }
  return result;
};
