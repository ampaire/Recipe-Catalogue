import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  className, src, name,
}) => (
  <div className={className}>
    <img className="bg-img" src={src} alt={name} />
    <h1 className="img-txt">{name}</h1>
  </div>
);

const Recipe = ({
  src, name,
}) => (
  <Image className="meal-preview shadow" src={src} name={name} alt={name} />
);

Image.defaultProps = {
  className: 'img-rcp',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Recipe.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Recipe;
