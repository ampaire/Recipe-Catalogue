import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Recipes from '../Components/Recipes';
import fetchAllRecipes from '../Actions/fetchAll';
import fetchMeal from '../Actions/fetchSingle';
import { getProductsError, getProducts, getProductsPending } from '../Settings/Index';
import { UPDATE_CATEGORY } from '../Actions/index';
import PageLoader from '../Components/Loading';

const RecipesList = props => {
  const {
    recipes, pending, fetchAllRecipes, category,
  } = props;

  useEffect(() => {
    fetchAllRecipes(category);
  }, [category, fetchAllRecipes]);

  const shouldComponentRender = () => {
    if (category === undefined || pending === true) return false;
    return true;
  };

  if (!shouldComponentRender()) { return <PageLoader />; }
  return (
    <div>
      <div className="container">
        {recipes.map(el => (
          <Link to={`/recipe/${el.idMeal}`} key={Math.random() * 1000}>
            <Recipes
              src={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

RecipesList.defaultProps = {
  recipes: [''],
};

RecipesList.propTypes = {
  pending: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  fetchAllRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(String),
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      error: getProductsError(allMeals),
      recipes: getProducts(allMeals),
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllRecipes,
  addFilter: UPDATE_CATEGORY,
  fetchMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesList);
