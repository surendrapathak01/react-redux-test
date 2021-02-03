import React from 'react';
import { shallow } from 'enzyme';
import Headline from '../index.js';

import { findTestAttr } from '../../../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {

  describe('Have props', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc'
      };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      const component = findTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render a H1', () => {
      const component = findTestAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    it('should render description', () => {
      const component = findTestAttr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });

  });

  describe('Have NO props', () => {
    let wrapper;
    beforeEach(()=> {
      wrapper = setUp();
    });

    it('should not render', () => {
      const component = findTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });

});