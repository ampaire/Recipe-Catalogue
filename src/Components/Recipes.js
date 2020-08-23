/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import Image from './RecipeImage';

const Meal = ({
  src, name,
}) => (
  <Image className="category shadow" src={src} name={name} alt={name} />
);

Meal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Meal;
