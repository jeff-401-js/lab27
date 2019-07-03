import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../../components/Header/Header';

describe('<Counter/> Snapshot Test', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Header/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
