import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCategories from '../Actions/fetchCategories';
import Category from '../Components/Categories';
import PageLoader from '../Components/Loading';
import {
  getProductsError,
  getProductsPending,
  getCategoriesList,
  categoryName,
  categoryDetails,
  categoryImage,
} from '../Settings/Index';

const AllCategories = props => {
  const { getCategories, categories, pending } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const shouldComponentRender = () => {
    if (pending === true || categories.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<PageLoader />);
  }

  return (
    <div>
      <h1 className="text-c g-text"> EXPORE OUR AVAILABLE CATEGORIES</h1>
      <div className="container">
        {categories.map(el => <Link key={el.idCategory} to={`/category/${el.strCategory}`}><Category name={categoryName(el)} description={categoryDetails(el)} src={categoryImage(el)} /></Link>)}
      </div>
    </div>
  );
};

AllCategories.propTypes = {
  pending: PropTypes.bool.isRequired,
  categories: PropTypes.arrayOf(Array).isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories,
};

const mapStateToProps = state => {
  const { categories } = state;
  return (
    {
      error: getProductsError(categories),
      categories: getCategoriesList(categories),
      pending: getProductsPending(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
