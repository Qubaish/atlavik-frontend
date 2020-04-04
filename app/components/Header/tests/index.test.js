import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../index';

describe('<Header />', () => {
    it('should render a DropDown', () => {
        const container = shallow(
            <Header />
        );
        expect(shallowToJson(container)).toMatchSnapshot();
    });
});
