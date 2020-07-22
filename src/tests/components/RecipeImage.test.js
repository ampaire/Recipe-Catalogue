/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../../Components/RecipeImage';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Image src="jest" name="testing" />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should display one image', () => {
    expect(component.find('img').hasClass('rcp-image')).toBe(true);
  });

  it('should display one header', () => {
    expect(component.find('h1').length).toBe(1);
  });
});
