import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../Components/CategoryFilter';
import fetchAllMeals from '../Actions/fetchAll';
import { getProductsPending } from '../Settings/Index';
import { UPDATE_CATEGORY } from '../Actions/index';
import MealsList from './RecipesList';

const AllMeals = props => {
  const {
    addFilter, match, current, fetchAllMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = evt => {
    const newCategory = evt.target.value;
    addFilter(evt.target.value);
    fetchAllMeals(newCategory);
  };

  return (
    <div>
      <div className="">

        <span className="">
          <CategoryFilter onChange={handleFilterChange} value={current} />
        </span>
        <h1 className="text-center">
          {' '}
          Currently Showing:
          {' '}
          <u>
            {current || category }
            {' '}
            {' '}
            Recipes
            {' '}
          </u>
        </h1>
      </div>
      <MealsList category={category} />
    </div>
  );
};

AllMeals.defaultProps = {
  category: 'Beef',
};

AllMeals.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMeals);
