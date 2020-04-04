import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../index';

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    const container = shallow(
      <App />
  );
  expect(shallowToJson(container)).toMatchSnapshot();
  });
});
