import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

import { findTestAttr } from '../../../../utils';

const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Header Component', () => {

  let component;
  beforeEach(() => {
    component = setup();
  });

  it('It should render a header', () => {
    const wrapper = findTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('It should render a logo', () => {
    const logo = findTestAttr(component, 'logoImg');
    expect(logo.length).toBe(1);
  });

})