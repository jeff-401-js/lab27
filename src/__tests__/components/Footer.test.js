import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../components/Footer/Footer';

describe('<Counter/> Snapshot Test', () => {
  it('renders correctly', () => {
    const component = renderer.create(<Footer/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
