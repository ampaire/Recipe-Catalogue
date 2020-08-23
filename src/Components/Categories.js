import React from 'react';
import PropTypes from 'prop-types';
import Image from './RecipeImage';

const Category = ({
  src, name,
}) => (
  <Image className="category shadow" src={src} name={name} />
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Category;
