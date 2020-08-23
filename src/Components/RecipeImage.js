import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  className, src, name,
}) => (
  <div className={className}>
    <img className="rcp-image" src={src} alt={name} />
    <h1 className="top-text">{name}</h1>
  </div>
);

Image.defaultProps = {
  className: 'w-50',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
