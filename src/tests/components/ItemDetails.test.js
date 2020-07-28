/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeDescription from '../../Components/Description';

const initial = {
  category: 'test',
  area: 'jest',
  ingredients: ['react', 'redux'],
  className: 'component',
};

const {
  ingredients, category, area, className,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(
    <RecipeDescription
      ingredients={ingredients}
      category={category}
      area={area}
      className={className}
    />,
  );
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one divs', () => {
    expect(component.find('div').length).toBe(1);
  });

  it('should render 6 span element', () => {
    expect(component.find('span').length).toBe(6);
  });
});
