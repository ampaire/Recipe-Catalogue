import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  className, src, name,
}) => (
  <div className={className}>
    <img className="bg-img" src={src} alt={name} />
    <h1 className="img-text">{name}</h1>
  </div>
);

const Category = ({
  src, name,
}) => (
  <Image className="category shadow" src={src} name={name} />
);

Category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: 'img-rcp',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Category;
