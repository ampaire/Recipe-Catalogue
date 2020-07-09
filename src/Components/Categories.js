import React from 'react';
import PropTypes from 'prop-types';
import ReciperImgage from './RecipeImage';

const Category = ({
  src, name,
}) => (
  <ReciperImgage className="category shadow" src={src} name={name} />
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Category;
