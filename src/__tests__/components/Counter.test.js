/* eslint-disable no-undef */
import React from 'react';
import Counter from '../../components/Counter/Counter';

describe('<Counter /> Enzyme Test', () => {
  it('is alive at application start', () => {
    // eslint-disable-next-line no-undef
    const app = shallow(<Counter/>);
    expect(app.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    const wrapper = mount(<Counter/>);

    wrapper.find('.up').simulate('click');
    expect(wrapper.state('counter')).toBe(1);
    wrapper.find('.up').simulate('click');
    expect(wrapper.state('counter')).toBe(2);
  });
});
