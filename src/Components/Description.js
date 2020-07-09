import React from 'react';
import PropTypes from 'prop-types';

const RecipeDescription = ({
  category, area, ingredients, className,
}) => (
  <div className={className}>
    <p className="text-b p-10">
      <span className="m-10">
        Category :
      </span>
      <span className="m-10 shadow ingredient">
        {category}
      </span>
    </p>
    <hr />
    <p className="text-b p-10">
      <span className="m-10">
        Area :
      </span>
      <span className="m-10 shadow ingredient">
        {area}
      </span>
    </p>
    <hr />
    <div className="d-flex flex-w">
      <p className="text-b">
        ingredients:
      </p>
      {ingredients.map(el => <span className="m-10 shadow ingredient" key={Math.random() * 1000}>{el}</span>)}
    </div>
    <hr />
  </div>
);

RecipeDescription.defaultProps = {
  className: 'w-50',
};

RecipeDescription.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  className: PropTypes.string,
};

export default RecipeDescription;
