/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import AllMeals from '../../Containers/AllRecipes';
import store from '../../Reducers/Index';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Provider store={store}><AllMeals /></Provider>);
  return component;
};

describe('Should not display content while app is loading', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should not render any header elements', () => {
    expect(component.find('h1').length).toBe(0);
  });

  it('should not render any span element', () => {
    expect(component.find('span').length).toBe(0);
  });
});
